import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { validateEmail } from '../../utils/validation';

interface WaitlistData {
  emails: string[];
}

const dataFilePath = path.join(process.cwd(), 'data', 'waitlist.json');

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

async function notifyTelegram(email: string) {
  const text = `📥 New waitlist signup: ${email}`;
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text,
      parse_mode: 'Markdown',
    }),
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Comprehensive email validation
    const validation = validateEmail(email);
    if (!validation.isValid) {
      return NextResponse.json(
        { success: false, message: validation.message },
        { status: 400 }
      );
    }

    // Load existing data
    let waitlistData: WaitlistData = { emails: [] };
    if (fs.existsSync(dataFilePath)) {
      const fileData = fs.readFileSync(dataFilePath, 'utf-8');
      waitlistData = JSON.parse(fileData);
    }

    // Check if email already exists
    if (waitlistData.emails.includes(email)) {
      return NextResponse.json(
        { success: false, message: 'Email already registered' },
        { status: 409 }
      );
    }

    // Add new email
    waitlistData.emails.push(email);

    // Save data back to file
    fs.writeFileSync(dataFilePath, JSON.stringify(waitlistData, null, 2));

    // Notify Telegram
    await notifyTelegram(email);

    return NextResponse.json(
      { success: true, message: 'Email added to waitlist successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing waitlist request:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process request' },
      { status: 500 }
    );
  }
}

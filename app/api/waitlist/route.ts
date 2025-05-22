import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { validateEmail } from '../../utils/validation';

interface WaitlistData {
  emails: string[];
}

const dataDir = path.join(process.cwd(), 'data');
const dataFilePath = path.join(dataDir, 'waitlist.json');

// Safely access environment variables
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

async function notifyTelegram(email: string) {
  // Check if the required environment variables are available
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.warn('Telegram notification skipped: Missing environment variables');
    return;
  }
  
  try {
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
  } catch (error) {
    console.error('Error sending Telegram notification:', error);
    // Fail silently - don't block the signup process due to notification issues
  }
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

    // Ensure the data directory exists
    try {
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
        console.log(`Data directory created: ${dataDir}`);
      }
    } catch (dirError) {
      console.error('Error creating data directory:', dirError);
      return NextResponse.json(
        { success: false, message: 'Failed to initialize data storage.' },
        { status: 500 }
      );
    }

    // Load existing data or initialize
    let waitlistData: WaitlistData = { emails: [] };
    try {
      if (fs.existsSync(dataFilePath)) {
        const fileData = fs.readFileSync(dataFilePath, 'utf-8');
        if (fileData.trim() !== '') { // Avoid parsing empty string
          const parsedData = JSON.parse(fileData);
          if (parsedData && Array.isArray(parsedData.emails)) {
            waitlistData = parsedData;
          } else {
            console.warn('Invalid structure in waitlist.json, initializing with empty emails.');
          }
        } else {
          console.log('waitlist.json is empty, initializing with empty emails.');
        }
      } else {
        console.log('waitlist.json not found, will be created with the new email.');
        // waitlistData is already { emails: [] }, file will be created by writeFileSync
      }
    } catch (e) {
      console.error('Error reading/parsing waitlist.json, initializing with empty emails:', e);
      // waitlistData remains { emails: [] }
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

    // Save data back to file (creates the file if it doesn't exist)
    try {
      fs.writeFileSync(dataFilePath, JSON.stringify(waitlistData, null, 2));
    } catch (writeError) {
      console.error('Error writing to waitlist.json:', writeError);
      return NextResponse.json(
        { success: false, message: 'Failed to save email to waitlist.' },
        { status: 500 }
      );
    }

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

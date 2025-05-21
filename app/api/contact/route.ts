import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { validateEmail } from '../../utils/validation';

interface ContactMessage {
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

interface ContactData {
  messages: ContactMessage[];
}

const dataFilePath = path.join(process.cwd(), 'data', 'contact.json');

// Safely access environment variables 
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

async function notifyTelegramContact(name: string, email: string, message: string) {
  // Check if the required environment variables are available
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.warn('Telegram notification skipped: Missing environment variables');
    return;
  }
  
  try {
    const text = `📩 New contact message:\n*Name:* ${name}\n*Email:* ${email}\n*Message:* ${message}`;
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
    // Fail silently - don't block the contact process due to notification issues
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const validation = validateEmail(email);
    if (!validation.isValid) {
      return NextResponse.json(
        { success: false, message: validation.message },
        { status: 400 }
      );
    }

    // Load existing data
    let contactData: ContactData = { messages: [] };
    if (fs.existsSync(dataFilePath)) {
      const fileData = fs.readFileSync(dataFilePath, 'utf-8');
      contactData = JSON.parse(fileData);
    } else {
      // Ensure the data directory exists
      const dataDir = path.join(process.cwd(), 'data');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
    }

    // Create new contact message
    const newMessage: ContactMessage = {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    };

    // Add new message
    contactData.messages.push(newMessage);

    // Save data back to file
    fs.writeFileSync(dataFilePath, JSON.stringify(contactData, null, 2));

    // Notify Telegram (non-blocking)
    notifyTelegramContact(name, email, message)
      .catch(err => console.error('Telegram notification failed but contact was saved:', err));

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in contact form submission:', error);
    
    // Provide more specific error messages based on error type
    const errorMessage = error instanceof Error 
      ? `Error: ${error.message}` 
      : 'An error occurred while processing your request';
    
    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 }
    );
  }
}

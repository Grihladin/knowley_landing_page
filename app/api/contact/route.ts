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

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in contact form submission:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}

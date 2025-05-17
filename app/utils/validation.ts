// Email validation utilities
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const MAX_EMAIL_LENGTH = 254; // RFC 5321
const DISPOSABLE_EMAIL_DOMAINS = [
  'tempmail.com',
  'throwawaymail.com',
  'mailinator.com',
  'temp-mail.org',
  'guerrillamail.com',
  // Add more as needed
];

export const validateEmail = (email: string): { isValid: boolean; message: string } => {
  // Check if email is empty
  if (!email) {
    return { isValid: false, message: 'Email address is required' };
  }

  // Check email length
  if (email.length > MAX_EMAIL_LENGTH) {
    return { 
      isValid: false, 
      message: `Email address must be less than ${MAX_EMAIL_LENGTH} characters` 
    };
  }

  // Check email format using regex
  if (!EMAIL_REGEX.test(email)) {
    return { isValid: false, message: 'Please enter a valid email address' };
  }

  // Check for disposable email domains
  const domain = email.split('@')[1].toLowerCase();
  if (DISPOSABLE_EMAIL_DOMAINS.includes(domain)) {
    return { 
      isValid: false, 
      message: 'Please use your work email address (disposable emails not allowed)' 
    };
  }

  return { isValid: true, message: '' };
};

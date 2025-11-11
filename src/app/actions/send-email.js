// src/app/actions/send-email.js
'use server';

import { Resend } from 'resend';

// Validar que las variables de entorno existan
if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY environment variable is not set.');
}
if (!process.env.CONTACT_FORM_EMAIL) {
  throw new Error('CONTACT_FORM_EMAIL environment variable is not set.');
}

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.CONTACT_FORM_EMAIL;

export async function sendEmail(formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const subject = formData.get('subject');
  const message = formData.get('message');

  if (!name || !email || !subject || !message) {
    return { error: 'Missing required fields' };
  }

  try {
    const { data, error } = await resend.emails.send({
      // === CAMBIOS AQUÍ ===
      from: 'Website Contact <web@capitalcity-volleyball.com>',
      to: [toEmail],
      subject: `New Contact Form Message: ${subject}`,
      html: `
        <p>You have received a new message from the website contact form.</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      // === FIN DE CAMBIOS ===
    });

    if (error) {
      console.error('Error from Resend:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (exception) {
    console.error('Exception caught:', exception);
    return { success: false, error: 'An unknown error occurred.' };
  }
}
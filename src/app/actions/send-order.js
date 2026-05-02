// src/app/actions/send-order.js
'use server';

import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const toEmail = process.env.CONTACT_FORM_EMAIL || 'info@capitalcityvolleyball.com';

export async function sendOrder(formData) {
  const name = formData.get('name');
  const phone = formData.get('phone');
  const email = formData.get('email');
  const product = formData.get('product');
  const color = formData.get('color');
  const size = formData.get('size');
  const quantity = formData.get('quantity') || '1';
  const notes = formData.get('notes') || 'None';

  if (!name || !phone || !product || !color) {
    return { error: 'Missing required fields' };
  }

  const orderSummary = `
    <h2 style="color:#1a1a2e">📦 New Merch Order</h2>
    <table style="border-collapse:collapse;width:100%">
      <tr><td style="padding:8px;border:1px solid #ddd"><strong>Name</strong></td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd"><strong>Phone/WhatsApp</strong></td><td style="padding:8px;border:1px solid #ddd">${phone}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd"><strong>Email</strong></td><td style="padding:8px;border:1px solid #ddd">${email || 'Not provided'}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd"><strong>Item</strong></td><td style="padding:8px;border:1px solid #ddd">${product}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd"><strong>Color</strong></td><td style="padding:8px;border:1px solid #ddd">${color}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd"><strong>Size</strong></td><td style="padding:8px;border:1px solid #ddd">${size || 'N/A'}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd"><strong>Quantity</strong></td><td style="padding:8px;border:1px solid #ddd">${quantity}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd"><strong>Notes</strong></td><td style="padding:8px;border:1px solid #ddd">${notes}</td></tr>
    </table>
  `;

  try {
    if (resend) {
      const { error } = await resend.emails.send({
        from: 'Merch Orders <web@capitalcityvolleyball.com>',
        to: [toEmail],
        subject: `🛒 New Merch Order from ${name} — ${product} (${color})`,
        html: orderSummary,
      });
      if (error) {
        console.error('Resend error:', error);
        return { success: false, error: error.message };
      }
    }
    return { success: true };
  } catch (ex) {
    console.error('Exception:', ex);
    return { success: false, error: 'Unknown error' };
  }
}

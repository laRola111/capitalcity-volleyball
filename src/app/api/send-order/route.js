import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req) {
  // Inicializamos Resend dentro de la función para que no rompa el build de Vercel
  // si las variables de entorno aún no están configuradas en el panel.
  const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key');

  try {
    const data = await req.json();
    const { name, email, product, color, size, qty, notes } = data;

    // Validación básica
    if (!name || !product || !color) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const emailHtml = `
      <h2>New Merch Order - Capital City Volleyball</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email || 'N/A'}</p>
      <hr />
      <h3>Order Details</h3>
      <p><strong>Product:</strong> ${product}</p>
      <p><strong>Color:</strong> ${color}</p>
      <p><strong>Size:</strong> ${size || 'N/A'}</p>
      <p><strong>Quantity:</strong> ${qty}</p>
      <p><strong>Notes:</strong> ${notes || 'None'}</p>
    `;

    // Tomamos los correos desde las variables de entorno
    const toEmail = process.env.CONTACT_FORM_EMAIL || 'Capitalcity.volleyballatx@gmail.com';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

    const { data: resendData, error } = await resend.emails.send({
      from: `Capital City Orders <${fromEmail}>`, 
      to: [toEmail], 
      subject: `Merch Order - ${product} - ${name}`,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: resendData });
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

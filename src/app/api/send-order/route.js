import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Utilizamos la variable de entorno para la API key de Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, phone, email, product, color, size, qty, notes } = data;

    // Validación básica
    if (!name || !phone || !product || !color) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const emailHtml = `
      <h2>New Merch Order - Capital City Volleyball</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email || 'N/A'}</p>
      <hr />
      <h3>Order Details</h3>
      <p><strong>Product:</strong> ${product}</p>
      <p><strong>Color:</strong> ${color}</p>
      <p><strong>Size:</strong> ${size || 'N/A'}</p>
      <p><strong>Quantity:</strong> ${qty}</p>
      <p><strong>Notes:</strong> ${notes || 'None'}</p>
    `;

    // Tomamos el correo destino desde la variable de entorno
    const toEmail = process.env.CONTACT_FORM_EMAIL || 'Capitalcity.volleyballatx@gmail.com';

    // IMPORTANTE: Hasta que no se verifique el dominio 'capitalcity-volleyball.com' en Resend,
    // el remitente "from" debe ser un dominio de prueba o uno que ya esté verificado en tu cuenta.
    // Además, el plan gratuito de Resend (sin dominio verificado) solo te permite enviar correos a la dirección
    // de email registrada en tu cuenta de Resend (la tuya personal).
    const { data: resendData, error } = await resend.emails.send({
      from: 'Capital City Orders <onboarding@resend.dev>', 
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

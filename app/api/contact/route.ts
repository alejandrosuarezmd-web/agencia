import { NextRequest, NextResponse } from 'next/server';

// Ejemplo usando un servicio externo (SendGrid, Nodemailer, etc.)
export async function POST(req: NextRequest) {
  const { 
    name,
    lastName,
    email,
    phone,
    businessName,
    position,
    message,
} = await req.json();

  try {
    console.log("name: ", name)
    console.log("lastName: ", lastName)
    console.log("email: ", email)
    console.log("phone: ", phone)
    console.log("businessName: ", businessName)
    console.log("position: ", position)
    console.log("message: ", message)
    // Aquí iría la lógica para enviar el email
    // Ejemplo con SendGrid
    /*
    import sgMail from '@sendgrid/mail';
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    await sgMail.send({
      to: 'tucorreo@example.com',
      from: 'tucorreo@example.com',
      subject: `Nuevo mensaje de ${name}`,
      text: message,
      html: `<p>Correo: ${email}</p><p>Mensaje: ${message}</p>`
    });
    */

    return NextResponse.json({ message: 'Email enviado' });
  } catch (err) {
    return NextResponse.json({ message: 'Error al enviar', error: err }, { status: 500 });
  }
}

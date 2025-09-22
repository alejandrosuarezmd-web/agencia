import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const {
    name,
    lastName,
    email,
    phone,
    businessName,
    city,
    message,
  } = await req.json();

  try {
    console.log("name: ", name);
    console.log("lastName: ", lastName);
    console.log("email: ", email);
    console.log("phone: ", phone);
    console.log("businessName: ", businessName);
    console.log("city: ", city);
    console.log("message: ", message);

    // 1️⃣ Envío a Make (tu integración actual)
    const webhookUrl = process.env.MAKE_WEBHOOK_URL!;
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        lastName,
        email,
        phone,
        businessName,
        city,
        message,
      }),
    });

    if (!res.ok) {
      throw new Error("Error al enviar a Make");
    }

    // 2️⃣ Configuración de Nodemailer con Donweb
    const transporter = nodemailer.createTransport({
      host: "a0020292.ferozo.com",
      port: 465,
      secure: true,
      auth: {
        user: "form@kalyx.agency", // tu cuenta de envío
        pass: process.env.MAIL_PASS, // clave guardada en .env.local
      },
    });

    // 3️⃣ Opciones del correo
    const mailOptions = {
      from: '"Formulario Web Kalyx" <form@kalyx.agency>',
      to: "info@kalyx.agency", // tu casilla receptora
      subject: `Nuevo mensaje de ${name} ${lastName}`,
      text: `
        Nombre: ${name} ${lastName}
        Email: ${email}
        Teléfono: ${phone}
        Empresa: ${businessName}
        Ciudad: ${city}
        Mensaje: ${message}
      `,
      html: `
        <h3>Nuevo mensaje del formulario</h3>
        <p><b>Nombre:</b> ${name} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Teléfono:</b> ${phone}</p>
        <p><b>Empresa:</b> ${businessName}</p>
        <p><b>Ciudad:</b> ${city}</p>
        <p><b>Mensaje:</b> ${message}</p>
      `,
    };

    // 4️⃣ Enviar correo
    const info = await transporter.sendMail(mailOptions);
    console.log("Correo enviado:", info.messageId);

    return NextResponse.json({
      message: "Datos enviados a Make y correo enviado correctamente",
    });
  } catch (err) {
    console.error("Error en API:", err);
    return NextResponse.json(
      { message: "Error en el servidor", error: err },
      { status: 500 }
    );
  }
}

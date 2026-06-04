import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone) {
      return new Response(
        JSON.stringify({ ok: false, message: 'Faltan campos requeridos' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'osteosalix@gmail.com',
        pass: import.meta.env.GMAIL_TOKEN,
      },
    });

    const text = `Email: ${email}\nNombre: ${name}\nTeléfono: ${phone}\nMensaje: ${message ?? ''}`;

    await transporter.sendMail({
      from: email,
      to: 'osteosalix@gmail.com',
      subject: 'Contacto desde web osteosalix',
      text,
    });

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('[ERROR EMAIL]', error);
    return new Response(
      JSON.stringify({ ok: false, message: 'Error al enviar el mensaje' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

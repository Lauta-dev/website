import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import { MAIL_PASS, MAIL_TO, MAIL_USER } from "astro:env/server";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  const name = data.get("name")?.toString() || "";
  const email = data.get("email")?.toString() || "";
  const subject = data.get("subject")?.toString() || "Sin asunto";
  const message = data.get("message")?.toString() || "";

  // Configuración de Gmail con contraseña de aplicación
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: MAIL_USER,
      pass: MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // remitente
      to: MAIL_TO,                  // destino (tu Gmail)
      subject,
      html: `
        <h1>Nuevo mensaje de contacto</h1>
        <p><b>Nombre:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mensaje:</b></p>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
};

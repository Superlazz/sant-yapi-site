import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const contact = String(body.contact || "").trim();
    const service = String(body.service || "Belirtilmedi").trim();
    const message = String(body.message || "").trim();

    if (!name || !contact || !message) {
      return Response.json(
        { ok: false, message: "Lütfen ad, iletişim ve mesaj alanlarını doldurun." },
        { status: 400 }
      );
    }

    const requiredEnv = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "MAIL_TO"];
    const missingEnv = requiredEnv.filter((key) => !process.env[key]);

    if (missingEnv.length > 0) {
      console.error("Eksik mail ayarı:", missingEnv);
      return Response.json(
        { ok: false, message: `Mail ayarları eksik: ${missingEnv.join(", ")}` },
        { status: 500 }
      );
    }

    const port = Number(process.env.SMTP_PORT);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify();

    const mailResult = await transporter.sendMail({
      from: `"Sant Yapı Web Sitesi" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: contact.includes("@") ? contact : process.env.SMTP_USER,
      subject: "Sant Yapı Web Sitesi - Yeni İletişim Talebi",
      text: `
Yeni iletişim formu geldi.

Ad / Firma:
${name}

Telefon veya E-posta:
${contact}

Hizmet:
${service}

Mesaj:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Sant Yapı Web Sitesi - Yeni İletişim Talebi</h2>
          <p><strong>Ad / Firma:</strong><br />${escapeHtml(name)}</p>
          <p><strong>Telefon veya E-posta:</strong><br />${escapeHtml(contact)}</p>
          <p><strong>Hizmet:</strong><br />${escapeHtml(service)}</p>
          <p><strong>Mesaj:</strong><br />${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    console.log("Mail gönderildi:", mailResult.messageId);

    return Response.json({
      ok: true,
      message: "Mesajınız başarıyla info@santyapi.com adresine gönderildi.",
    });
  } catch (error) {
    console.error("İletişim formu mail hatası:", error);

    return Response.json(
      {
        ok: false,
        message: error?.message || "Mesaj gönderilirken bir hata oluştu.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

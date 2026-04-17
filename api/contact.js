import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message, subject } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  if (message.length > 2000) {
    return res.status(400).json({ error: "Message too long." });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_PORT === "465",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const safeText = (str) => String(str).replace(/</g, "&lt;").replace(/>/g, "&gt;");

  try {
    await transporter.sendMail({
      from: `"HeyKIRI Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL || "hello@heykiri.io",
      replyTo: email,
      subject: `New message from ${name}${subject ? ` — ${subject}` : ""}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${safeText(name)}</p><p><strong>Email:</strong> ${safeText(email)}</p><hr><p>${safeText(message).replace(/\n/g, "<br>")}</p>`,
    });

    return res.status(200).json({ success: true });
  } catch {
    return res.status(500).json({ error: "Failed to send message. Please try again." });
  }
}

import nodemailer from "nodemailer";

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { name, phone, email, tattooEnquiry } = req.body;

  // Create a nodemailer transport
  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.REACT_APP_MAILTRAP_USERNAME,
      pass: process.env.REACT_APP_MAILTRAP_PASSWORD,
    },
  });

  // Compose email message
  const message = {
    from: email,
    to: "mrook1979@hotmail.com", // Owner's email address
    subject: "NEW TATTOO ENQUIRY",
    text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nEnquiry: ${tattooEnquiry}`,
  };

  // Send the email
  try {
    const info = await transporter.sendMail(message);
    console.log("Email sent:", info.response);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "An error occurred while sending the email" });
  }
};
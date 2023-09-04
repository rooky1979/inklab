const sendEmail = require('../../utils/email');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const formData = req.body;

    // Validate and process the form data if needed

    const emailSent = await sendEmail(formData);

    if (emailSent) {
      res.status(200).json({ success: true });
    } else {
      res.status(500).json({ success: false, error: 'Email could not be sent' });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
}

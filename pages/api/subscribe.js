import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email } = req.body;

    const apiKey = process.env.REACT_APP_MAILCHIMP_API_KEY;
    const listId = process.env.REACT_APP_MAILCHIMP_LIST_ID;

    try {
      const response = await axios.post(
        `https://us21.api.mailchimp.com/3.0/lists/${listId}/members`,
        {
          email_address: email,
          status: 'subscribed',
          merge_fields: {
            FNAME: firstName,
            LNAME: lastName,
          },
        },
        {
          headers: {
            Authorization: `Basic ${Buffer.from(`apikey:${apiKey}`).toString('base64')}`,
          },
        }
      );

      if (response.status === 200) {
        res.status(200).json({ success: true });
      } else {
        res.status(400).json({ success: false });
      }
    } catch (error) {
      console.error('Mailchimp error:', error.response?.data || error.message);
      res.status(500).json({ success: false });
    }
  } else {
    res.status(405).end();
  }
}
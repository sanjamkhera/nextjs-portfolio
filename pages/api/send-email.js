import nodemailer from 'nodemailer';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb'
    }
  }
};

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, message } = req.body;

    // Check if required fields are present
    if (!email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false, // Use STARTTLS
      auth: {
        user: process.env.GODADDY_EMAIL_USER,
        pass: process.env.GODADDY_EMAIL_PASS
      },
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: true,
        minVersion: 'TLSv1.2'
      }
    });

    // HTML content for the email
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2>New Contact Form Submission</h2>
          <div style="margin-top: 20px;">
            <p><strong>From:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      </div>
    `;

    const mailOptions = {
      from: process.env.GODADDY_EMAIL_USER,
      to: process.env.GODADDY_EMAIL_USER,
      subject: 'New Contact Form Submission - Seawall Software',
      html: htmlContent,
      replyTo: email
    };

    try {
      await transporter.sendMail(mailOptions);
      
      // Send confirmation email to the user
      const confirmationMailOptions = {
        from: process.env.GODADDY_EMAIL_USER,
        to: email,
        subject: 'Thank you for contacting Seawall Software',
        html: `
          <div style="font-family: Arial, sans-serif; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
              <h2>Thank you for reaching out!</h2>
              <p>We've received your message and will get back to you as soon as possible.</p>
              <p>Best regards,<br>Seawall Software Team</p>
            </div>
          </div>
        `
      };

      await transporter.sendMail(confirmationMailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
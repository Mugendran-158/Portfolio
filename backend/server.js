import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import { rateLimit } from 'express-rate-limit';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security: Rate Limiting to prevent spam
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 requests per window
    message: { error: 'Too many requests from this IP, please try again after 15 minutes' },
    standardHeaders: true,
    legacyHeaders: false,
});

// Middleware
app.use(cors());
app.use(express.json({ limit: '10kb' })); // Protection: Max message length protection

// SMTP Transporter Configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail App Password
    },
});

// Secure Mail Gateway Route
app.post('/send-email', limiter, async (req, res) => {
    const { name, to, message } = req.body;

    // Input Validation
    if (!name || !to || !message) {
        return res.status(400).json({ error: 'All fields (name, to, message) are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(to)) {
        return res.status(400).json({ error: 'Invalid recipient email format.' });
    }

    try {
        // Audit log (internal)
        console.log(`[GATEWAY] Attempting to transmit message from ${name} to ${to}`);

        const mailOptions = {
            from: `"Portfolio Gateway" <${process.env.EMAIL_USER}>`,
            to: to,
            subject: 'Message from Mugendraraja',
            text: `Hello,

You received a message from Mugendraraja’s portfolio.

Sender Name: ${name}

Message:
${message}`,
            html: `
            <div style="font-family: sans-serif; padding: 20px; color: #333;">
                <h2 style="color: #2563eb;">Institutional Message Gateway</h2>
                <p>Hello,</p>
                <p>You received a message from <strong>Mugendraraja's portfolio</strong>.</p>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                <p><strong>Sender Name:</strong> ${name}</p>
                <p><strong>Message:</strong></p>
                <blockquote style="border-left: 4px solid #2563eb; padding-left: 15px; font-style: italic;">
                    ${message}
                </blockquote>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                <p style="font-size: 12px; color: #999;">This email was sent via the secure Mugendraraja Portfolio SMTP Gateway.</p>
            </div>
        `
        };

        await transporter.sendMail(mailOptions);

        console.log(`[GATEWAY] Transmission successful to ${to}`);
        res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('[GATEWAY] Error sending email:', error);
        res.status(500).json({ error: 'Failed to send message. Please try again later.' });
    }
});

// Health Check
app.get('/health', (req, res) => {
    res.status(200).send('SMTP Gateway is operational');
});

app.listen(PORT, () => {
    console.log(`[GATEWAY] Enterprise SMTP server running on port ${PORT}`);
});

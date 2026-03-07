# Enterprise SMTP Mail Gateway Deployment Guide

This document outlines the procedure for deploying the **Institutional SMTP Gateway** for the Mugendraraja Portfolio.

---

## 1. SMTP Configuration (Gmail)

To enable the secure transmission gateway, you must configure a Gmail App Password.

1.  Enable **2-Step Verification** on your Gmail account.
2.  Navigate to **Security** > **App Passwords**.
3.  Generate a new password for "Mail" on "Other (Custom Name: Portfolio Gateway)".
4.  Copy the 16-character code.

---

## 2. Backend Deployment (Render / Railway)

The backend is a Node.js Express server that acts as the secure bridge.

### Environment Variables
Set the following variables in your hosting provider's dashboard:
- `EMAIL_USER`: `your_email@gmail.com`
- `EMAIL_PASS`: `your_app_password_code`
- `PORT`: `5000` (or leave empty if provided by host)

### Steps
1. Push the `backend` folder to a separate GitHub repository or use a monorepo structure.
2. Connect the repository to **Render** or **Railway**.
3. Use the startup command: `npm start`.
4. Copy the live API URL (e.g., `https://api.mugendraraja.com`).

---

## 3. Frontend Linkage (Vercel / Netlify)

1. Open `src/pages/GatewayContact.jsx`.
2. Locate the `axios.post` call:
   ```javascript
   const response = await axios.post('http://localhost:5000/send-email', formData);
   ```
3. Replace `http://localhost:5000/send-email` with your **live backend URL**.
4. Deploy the frontend to **Vercel** or **Netlify**.

---

## 4. Security Audit
- [x] **Rate Limiting**: Enabled (5 requests per 15 mins).
- [x] **Max Payload**: 10KB restriction active.
- [x] **Environment Security**: SMTP credentials stored server-side only.
- [x] **Input Validation**: Regex and length checks implemented.

---
**Institutional Message Gateway • 2026 Registry**

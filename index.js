const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

// Configure the email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'deveshdv760@gmail.com',
    pass: 'd1e2v3e4s5h6@P'
  }
});

exportification = funs.sendProductSubmissionNotctions.https.onCall(async (data, context) => {
  const { productId, productName, userEmail } = data;

  const mailOptions = {
    from: 'deveshdv76@gmail.com',
    to: 'deveshdv761@gmail.com', // The email where you want to receive notifications
    subject: 'New Product Submission',
    html: `
      <h1>New Product Submission</h1>
      <p>A new product has been submitted:</p>
      <ul>
        <li>Product ID: ${productId}</li>
        <li>Product Name: ${productName}</li>
        <li>Submitted by: ${userEmail}</li>
      </ul>
      <p>Please log in to the admin panel to review and verify this submission.</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email', error);
    return { success: false, error: error.message };
  }
});
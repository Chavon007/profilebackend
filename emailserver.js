import nodemailer from "nodemailer";

import dotenv from "dotenv";

dotenv.config();

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export let sendMail = async ({ email, subject, message }) => {
  let mailOption = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS,
    subject: ` ${subject}`,
    text: `
        email: ${email};
        message: ${message}
        `,
  };

  await transporter.sendMail(mailOption);
};

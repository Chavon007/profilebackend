import express from "express";
import { sendMail } from "./emailserver.js";

const router = express.Router();

router.post("/send-email", async (req, res) => {
  const { email, subject, message } = req.body;

  try {
    await sendMail({ email, subject, message });
    res.status(200).json({ message: "Message sent Successfully" });
  } catch (err) {
    res.status(401).json({ Error: "Failed to send message" });
  }
});

export default router;

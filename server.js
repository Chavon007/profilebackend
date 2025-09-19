import express from "express";
import email from "./email.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "https://salvation-azuh.vercel.app",
    credentials: true,
  })
);

app.use("/", email);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

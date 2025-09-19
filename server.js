import express from "express";
import email from "./email.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", email);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});

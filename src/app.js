import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// this middleware helps to take json in the body
app.use(express.json({ limit: "16kb" }));

// this middleware helps to instruct the express on how to encode the params sent
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// this middleware helps in storage of public assets like - pdfs and images
app.use(express.static("public"));

// helps to access and modify user cookies in thier browser
app.use(cookieParser())

export { app };

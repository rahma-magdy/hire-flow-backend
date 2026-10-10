import express from "express";
const app = express();

app.get("/health", (req, res) => {
  res.json({ message: "API is running" });
});


export default app;

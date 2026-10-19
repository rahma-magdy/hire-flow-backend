const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const jobsRoutes = require("./routes/jobsRoutes");
const userRoutes = require("./routes/usersRoutes");
const { isTest } = require("../env");
const env = require("../env");

const URL = env.DATABASE_URL;
const app = express();

const allowedOrigins = [
  "http://localhost:5173",

  // TODO:  backend link when uploading to vercel,
  // TODO: front end link
];

app.use(helmet());
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.use(morgan("dev", { skip: () => isTest }));

app.get("/health", (req, res) => {
  res.json({ message: "API is running" });
});

mongoose
  .connect(URL)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((er) => {
    console.log(`DB Disconnected due to ${er.message}`);
  });

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/jobs", jobsRoutes);
app.use("/api/v1/users", userRoutes);
module.exports = app;

import { Router } from "express";
import register from "../controllers/signupController.js";

const router = Router();

router.post("/register", register);

router.post("/login", (req, res) => {
  res.status(201).json({ message: "user logged in" });
});

export default router;

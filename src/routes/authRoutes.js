import { Router } from "express";
import register from "../controllers/signupController.js";
import login from "../controllers/loginController.js";

const router = Router();

router.post("/register", register);

router.post("/login", login);

export default router;

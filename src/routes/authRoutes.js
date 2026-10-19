const { Router } = require("express");
const register = require("../controllers/signupController");
const login = require("../controllers/loginController");

const router = Router();

router.post("/register", register);

router.post("/login", login);

module.exports = router;

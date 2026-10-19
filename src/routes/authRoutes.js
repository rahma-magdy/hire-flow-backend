const { Router } = require("express");
const register = require("../controllers/signupController");
const login = require("../controllers/loginController");
const checkLoginAuth = require("../middleware/checkLoginAuth");
const router = Router();

router.post("/register", register);

router.post("/login", checkLoginAuth, login);

module.exports = router;

const { Router } = require("express");
const register = require("../controllers/signupController");
const login = require("../controllers/loginController");
const checkLoginAuth = require("../middleware/checkLoginAuth");
const checkRoleAuth = require("../middleware/checkRoleAuth");
const logout = require("../controllers/logoutController");
const router = Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

router.get("/admin", checkLoginAuth, checkRoleAuth("admin"), (req, res) => {
  res.json({ message: "Welcome Admin" });
});


module.exports = router;

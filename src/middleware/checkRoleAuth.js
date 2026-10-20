const checkRoleAuth = (roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    if (req.user.role === roles) {
      return next();
    }

    return res.status(403).json({
      message: "Forbidden",
    });
  };
};
module.exports = checkRoleAuth;

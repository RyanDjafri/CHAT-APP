const router = require("express").Router();
const authControllers = require("../../controllers/auth/auth.controllers");

router.post("/auth/signup", authControllers.signUp);
router.post("/auth/signin", authControllers.signIn);
router.get("/auth/logout", authControllers.logout);

module.exports = router;

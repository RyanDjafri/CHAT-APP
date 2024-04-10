const router = require("express").Router();
const userControllers = require("../../controllers/user/user.controllers");

router.get("/users", userControllers.getAllUsers);
router.get("/user/:id", userControllers.getUserById);
router.put("/user/:id", userControllers.updateUser);

module.exports = router;

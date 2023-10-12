var express = require("express");
var router = express.Router();

const { getUsers, createUser } = require("../controller/user/userController");

/* GET users listing. */
router.get("/", getUsers);

router.post("/createUser", createUser);

module.exports = router;

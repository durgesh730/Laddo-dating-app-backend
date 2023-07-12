const express = require("express");
const { UserController } = require("../controllers/user.controllers");
const router = express.Router();
const { Auth } = require("../middlewares/auth.middlewares");

//post requests
router.post("/phonenumber", UserController.phoneNumber);
router.post("/signUp", [Auth], UserController.signUp);

//get requests
router.get("/getSingleUserDetails", UserController.GetSingleUserDetails)
router.get("/getalluserdetails", UserController.GetAllUserDetails)

module.exports.UserRouter = router;

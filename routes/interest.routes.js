const express = require("express");
const router = express.Router();
const { Auth } = require("../middlewares/auth.middlewares");
const { InterestController } = require("../controllers/Interset.controllers");

//post request
router.post("/saveinterest", InterestController.SaveInterest);

// get request
router.get("/getinterest", InterestController.GetInterest);

//update request
router.put("/updateCategory/:id", InterestController.updateInterest)

//delete request
router.delete("/deleteinterest", InterestController.deleteInterest);

module.exports.InterestRouter = router;

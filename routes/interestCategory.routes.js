const express = require("express");
const router = express.Router();
const { Auth } = require("../middlewares/auth.middlewares");
const { InterestCategoryController } = require("../controllers/InterestCategory.controller");


//post request
router.post("/saveinterestcategory", InterestCategoryController.SaveInterestCategory);

// get request
router.get("/getinterestcategory", InterestCategoryController.GetInterestCategory);

//update request
router.put("/updateinterestcategory/:id", InterestCategoryController.updateInterestCategory)

//delete request
router.delete("/deleteinterestiategory", InterestCategoryController.deleteInterestCategory);

module.exports.IntersetCategoryRouter = router;

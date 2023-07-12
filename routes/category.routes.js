const express = require("express");
const router = express.Router();
const { CategoryController } = require("../controllers/category.controllers");

//post requests
router.post("/usercategory", CategoryController.SaveUserCategory);

//get requests
router.get("/getUserCategory", CategoryController.GetUserCategories);

// delete request
router.delete("/deletecategory/:id", CategoryController.deleteCategory)

//update request
router.put("/updateCategory/:id", CategoryController.updateCategory)

module.exports.CategoryRouter = router;

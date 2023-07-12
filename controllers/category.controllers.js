const HttpError = require("../helpers/HttpError.helpers");
const Response = require("../helpers/Response.helpers");
const { CategoryService } = require("../services/category.service");

class CategoryController {

    //  save user category 
    SaveUserCategory = async (req, res) => {
        const body = req.body;
        const user = await CategoryService.create(body);
        Response(res).status(201).body(user).message("Created Successfully!").send();
    }

    // get saved data from database 
    GetUserCategories = async (req, res) => {
        const resp = await CategoryService.find();
        Response(res).status(201).body(resp).send();
    }

    deleteCategory = async (req, res) => {
        Response(res).message("Successfully Deleted").body(await CategoryService.findByIdAndDelete(req.params.id)).send()
    }

    updateCategory = async (req, res) => {
        const body = req.body;
        const user = await CategoryService.findByIdAndUpdate({ _id: req.params.id }, body);
        Response(res).status(201).body(user).message("Successfully Update!").send();
    };

}

module.exports.CategoryController = new CategoryController();

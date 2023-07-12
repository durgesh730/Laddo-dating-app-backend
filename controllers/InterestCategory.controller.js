const HttpError = require("../helpers/HttpError.helpers");
const Response = require("../helpers/Response.helpers");
const { InterestCategoryService } = require("../services/interestCategory.service");

class InterestCategoryController {

    //  save user category 
    SaveInterestCategory = async (req, res) => {
        const body = req.body;
        const user = await InterestCategoryService.create(body);
        Response(res).status(201).body(user).message("Created Successfully!").send();
    }

    // get saved data from database 
    GetInterestCategory = async (req, res) => {
        const resp = await InterestCategoryService.find();
        Response(res).status(201).body(resp).send();
    }

    deleteInterestCategory = async (req, res) => {
        Response(res).message("Successfully Deleted").body(await InterestCategoryService.findByIdAndDelete(req.params.id)).send()
    }

    updateInterestCategory = async (req, res) => {
        const body = req.body;
        const user = await InterestCategoryService.findByIdAndUpdate({ _id: req.params.id }, body);
        Response(res).status(201).body(user).message("Successfully Update!").send();
    };

}

module.exports.InterestCategoryController = new InterestCategoryController();

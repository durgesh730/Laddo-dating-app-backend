const HttpError = require("../helpers/HttpError.helpers");
const Response = require("../helpers/Response.helpers");
const { InterestService } = require("../services/interest.service");

class InterestController {

    //  save user interest 
    SaveInterest = async (req, res) => {
        const body = req.body;
        const user = await InterestService.create(body);
        Response(res).status(201).body(user).message("Created Successfully!").send();
    }

    // get saved data from database 
    GetInterest = async (req, res) => {
        const resp = await InterestService.find();
        Response(res).status(201).body(resp).send();
    }

    deleteInterest = async (req, res) => {
        Response(res).message("Successfully Deleted").body(await InterestService.findByIdAndDelete(req.params.id)).send()
    }

    updateInterest = async (req, res) => {
        const body = req.body;
        const user = await InterestService.findByIdAndUpdate({ _id: req.params.id }, body);
        Response(res).status(201).body(user).message("Successfully Update!").send();
    };

}

module.exports.InterestController = new InterestController();

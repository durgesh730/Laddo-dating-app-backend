const HttpError = require("../helpers/HttpError.helpers");
const Response = require("../helpers/Response.helpers");
const { UserService } = require("../services/user.service");

class UserController {

  phoneNumber = async (req, res) => {
    const body = req.body;

    let user = await UserService.findOne({ mobile: body.mobile });
    if (user) {
      const token = user.generateToken();
      Response(res).status(201).body({ token, user }).message("User already exist!").send();
    } else {
      user = await UserService.create(body);
      const token = user.generateToken();

      Response(res).status(201).body({ token, user }).message("Successfully registered!").send();
    }
  }

  signUp = async (req, res) => {
    const body = req.body;

    // req.user is userid which is find by token
    const user = await UserService.findByIdAndUpdate({ _id: req.user }, body);
    Response(res).status(201).body(user).message("Successfully registered!").send();
  };
   
  // get single user details using token   
  GetSingleUserDetails = async (req, res) => {
    const resp = await UserService.findOne({ id: req.user });
    Response(res).status(201).body(resp).send();
  }

  // get all user details 
  GetAllUserDetails = async (req, res) => {
    const resp = await UserService.find();
    Response(res).status(201).body(resp).send();
  }

}

module.exports.UserController = new UserController();

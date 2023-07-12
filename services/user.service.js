const { User } = require("../models/Users.model");
const BasicServices = require("./basic.service");
class UserService extends BasicServices {
  constructor() {
    super(User);
  }
  getFulldetails = (userId,loggedUserId) => {
    return User.aggregate(UserPipelines.getAllDetailsOfUser(userId,loggedUserId));
  };
}

module.exports.UserService = new UserService();

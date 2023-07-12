const { UserCategorySchema } = require("../models/UserCategory.model");
const BasicServices = require("./basic.service");
class CategoryService extends BasicServices {
  constructor() {
    super(UserCategorySchema);
  }

}

module.exports.CategoryService = new CategoryService();

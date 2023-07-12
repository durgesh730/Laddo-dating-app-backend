const { InterestCategory } = require("../models/InterestCategory.model");
const BasicServices = require("./basic.service");
class InterestCategoryService extends BasicServices {
    constructor() {
        super(InterestCategory);
    }

}

module.exports.InterestCategoryService = new InterestCategoryService();

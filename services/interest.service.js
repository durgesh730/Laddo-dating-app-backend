const { Interest } = require("../models/Interset.model");
const BasicServices = require("./basic.service");
class InterestService extends BasicServices {
    constructor() {
        super(Interest);
    }

}

module.exports.InterestService = new InterestService();

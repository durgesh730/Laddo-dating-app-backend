const mongoose = require("mongoose");

const InterestCategorySchema = mongoose.Schema(
    {
        category: {
            type: String,
        },
        picture: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

exports.InterestCategorySchema = mongoose.model("InterestCategory", InterestCategorySchema);

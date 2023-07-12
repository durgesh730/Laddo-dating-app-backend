const mongoose = require("mongoose");

const UserCategorySchema = mongoose.Schema(
    {
        title: {
            type: String,
        },
        desc: {
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

exports.UserCategorySchema = mongoose.model("UserCategory", UserCategorySchema);

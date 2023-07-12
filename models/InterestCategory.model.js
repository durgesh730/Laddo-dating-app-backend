const mongoose = require("mongoose");

const InterestCategorySchema = mongoose.Schema({

    interest: {
        type: mongoose.Schema.Types.ObjectId
    },
    picture: {
        type: String,
    },
    interestCategory: [{
        type: mongoose.Schema.Types.ObjectId
    }
    ]

},
    {
        timestamps: true,
    }
);

exports.InterestCategorySchema = mongoose.model("InterestCategory", InterestCategorySchema);

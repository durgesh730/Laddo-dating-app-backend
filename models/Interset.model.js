const mongoose = require("mongoose");

const InterestSchema = mongoose.Schema(
    {
        title: {
            type: String,
        },
        interest: [{
            type: String
        }
        ]
    },
    {
        timestamps: true,
    }
);

exports.InterestSchema = mongoose.model(" Interest", InterestSchema);

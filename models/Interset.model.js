const mongoose = require("mongoose");

const InterestSchema = mongoose.Schema({

    interest: {
        type: String,
    },
},
    {
        timestamps: true,
    }
);

exports.InterestSchema = mongoose.model(" Interest", InterestSchema);

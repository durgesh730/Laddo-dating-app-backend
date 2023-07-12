const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require('mongoose-type-email');
const Hasher = require("../helpers/Hasher.helper");
const { JWT_SECRET } = process.env;

const Schema = mongoose.Schema(
  {
    mobile: {
      type: Number,
    },
    otp: {
      type: Number,
      default: 12345
    },
    usercategory: {
      type: String
    },
    name: {
      type: String,
    },
    gender: {
      type: String
    },
    DOB: {
      type: Date
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
    },

    height: {
      type: Number
    },

    location: {
      type: {
        type: String, // Don't do `{ location: { type: String } }`
        enum: ['Point'], // 'location.type' must be 'Point'
      },
      coordinates: {
        type: [Number],
      }
    },

    prefrences: {
      lookingFor: {
        type: String
      }
    },
    photos: [
      {
        type: String
      }
    ],

    interests: [
      {
        type: mongoose.Schema.Types.ObjectId
      }
    ]

  },
  {
    timestamps: true,
  }
);

Schema.pre("save", async function (next) {
  var user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // generate a salt
  const salt = await Hasher.getSalt(10);

  // hash the password using our new salt
  const hash = await Hasher.hash(user.password, salt);

  // override the cleartext password with the hashed one
  user.password = hash;
  next();
});

Schema.methods.comparePassword = function (candidatePassword) {
  return new Promise((resolve, reject) => {
    Hasher.compare(candidatePassword, this.password)
      .then((isMatch) => resolve(isMatch))
      .catch((err) => reject(err));
  });
};

Schema.methods.generateToken = function () {
  let tokensave = jwt.sign({ _id: this._id }, JWT_SECRET,
    // expiresIn: "1d"
  );
  return tokensave;
}

exports.User = mongoose.model("User", Schema);

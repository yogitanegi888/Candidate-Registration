const { string } = require("joi");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    dateOfBirth: {
        type: String
    },
    residentialStreet1: {
        type: String
    },
    residentialStreet2: {
        type: String
    },
    permanentStreet1: {
        type: String
    },
    permanentStreet2: {
        type: String
    },
    documents: [

        {
            filename: {
                type: String
            },
            filetype: {
                type: String
            },
            file: {
                type: String
            }
        }

    ]
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;

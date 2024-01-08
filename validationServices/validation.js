


const Joi = require('joi');


function user_validation(payload) {
    const schema = Joi.object({
        firstName: Joi.string().min(3).max(30).required(),
        lastName: Joi.string().min(3).max(30).required(),
        email: Joi.date().required(),
        // dateofbirth: Joi.date().max('now').subtract(18, 'years').required(),
        residentialStreet1: Joi.string().min(3).max(50).required(),
        residentialStreet2: Joi.string().min(3).max(50).required(),
        filename: Joi.string().min(3).max(50).required(),
        filetype: Joi.string().required(),
        // file: Joi.file().require(),
    });

    return schema.validate(payload)
}

module.exports = { user_validation }

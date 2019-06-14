const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

// define the validation schema
const schema = Joi.object().keys({

    // name is required
    title: Joi.string().required(),

    description: Joi.string().required(),

    link_url: Joi.string().required(),

    category: Joi.objectId()

});
module.exports = schema;

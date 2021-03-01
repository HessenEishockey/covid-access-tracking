const Joi = require('joi');

const createCheckin = {
  body: Joi.object().keys({
    from: Joi.date().required(),
    until: Joi.date().required(),
    person: Joi.string().required(),
  }),
};

module.exports = {
  createCheckin,
};

const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
  index() {
    return celebrate({
      [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
      })
    });
  },

  delete() {
    return celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
      })
    });
  },

  create() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string()
          .required()
          .email(),
        whatsapp: Joi.string()
          .required()
          .min(10)
          .max(11),
        city: Joi.string().required(),
        uf: Joi.string()
          .required()
          .length(2)
      })
    });
  }
};

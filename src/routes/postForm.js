const Joi = require('joi');
const createFormLib = require('../lib/createFormLib');

module.exports = [{
  path: '/form/create',
  method: 'POST',
  handler(request, response) {
    const { formTitle, quesArray } = request.payload;
    return createFormLib.createForm(formTitle, quesArray).then(result => response({
      code: 201,
      data: result,
    }))
      .catch(() => response({
        code: 500,
        data: {},
      }));
  },
  config: {
    validate: {
      payload: {
        formTitle: Joi.string().min(6).max(200).required(),
        quesArray: Joi.string().required(),
      },
    },
  },
}];

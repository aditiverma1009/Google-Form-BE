const Joi = require('joi');
const fillFormLib = require('../lib/fillFormLib');

const { fillForm } = fillFormLib;

module.exports = [{
  path: '/form/submit',
  method: 'POST',
  handler(request, response) {
    const { ansArray } = request.payload;
    fillForm(ansArray).then(() => response({
      code: 201,
    }))
      .catch(() => response({
        code: 500,
        error: 'Could not save your response',
      }));
  },
  config: {
    validate: {
      payload: {
        ansArray: Joi.required(),
      },
    },
  },
}];

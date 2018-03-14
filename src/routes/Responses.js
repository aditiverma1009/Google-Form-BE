const Joi = require('joi');
const showResponsesLib = require('../lib/showResponsesLib');

module.exports = [{
  path: '/form/responses/{formid}',
  method: 'GET',
  handler(request, response) {
    const { formid } = request.params;
    return showResponsesLib.showResponses(formid).then(result => response({
      code: 201,
      data: result,
    }))
      .catch(() => response({
        code: 500,
        data: [],
        error: 'Trouble in finding responses',
      }));
  },
}];


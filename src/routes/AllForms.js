const displayFormsLib = require('../lib/displayFormsLib');

module.exports = [{
  path: '/forms/all',
  method: 'GET',
  handler(request, response) {
    return displayFormsLib.displayForms().then(result => response({
      code: 200,
      data: result,
    }))
      .catch(() => response({
        code: 500,
        data: [],
        error: 'Could not fetch forms',
      }));
  },
}];

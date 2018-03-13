const displayFormLib = require('../lib/displayFormLib');

module.exports = [{
  path: '/form/{formid}',
  method: 'GET',
  handler(request, response) {
    console.log(request.params);
    const { formid } = request.params;
    return displayFormLib.displayForm(formid).then(result => response({
      code: 200,
      data: result,
    }))
      .catch(() => response({
        code: 500,
        data: [],
        error: 'Could not fetch form fields',
      }));
  },
}];

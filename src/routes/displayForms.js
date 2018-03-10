const displayForms = require('../helper/displayForms');

const displayFormsHandler = (request, response) => {
  displayForms().then(allForms => response({
    code: 200,
    allForms,
  })).catch(() => response({
    code: 500,
  }));
};

module.exports = [{
  path: '/forms/display',
  method: 'GET',
  handler: displayFormsHandler,
}];

const createForm = require('./createForm');
const displayForms = require('./displayForms');
const showFormFields = require('./showFormFields');

const getHelloWorld = (request, response) => {
  response('On root.');
};

module.exports = [{
  path: '/',
  method: 'GET',
  handler: getHelloWorld,
}].concat(createForm).concat(displayForms).concat(showFormFields);

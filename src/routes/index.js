const createForm = require('./createForm');
const displayForms = require('./displayForms');

const getHelloWorld = (request, response) => {
  response('On root.');
};

module.exports = [{
  path: '/',
  method: 'GET',
  handler: getHelloWorld,
}].concat(createForm).concat(displayForms);

const createForm = require('./createForm');

const getHelloWorld = (request, response) => {
  response('On root.');
};

module.exports = [{
  path: '/',
  method: 'GET',
  handler: getHelloWorld,
}].concat(createForm);

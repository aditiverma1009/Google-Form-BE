const postForm = require('./postForm');
const getForms = require('./getForms');
const getForm = require('./getForm');

module.exports = [{
  path: '/',
  method: 'GET',
  handler(request, response) {
    response('On root.');
  },
}].concat(postForm, getForms, getForm);


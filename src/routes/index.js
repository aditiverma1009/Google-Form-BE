const Form = require('./Form');
const AllForms = require('./AllForms');
const FormFields = require('./FormFields');
const Answer = require('./Answer');
const Responses = require('./Responses');

module.exports = [{
  path: '/',
  method: 'GET',
  handler(request, response) {
    response('On root.');
  },
}].concat(Form, AllForms, FormFields, Answer, Responses);


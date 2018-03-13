const Form = require('./Form');
const AllForms = require('./AllForms');
const FormFields = require('./FormFields');
const Answer = require('./Answer');

module.exports = [{
  path: '/',
  method: 'GET',
  handler(request, response) {
    response('On root.');
  },
}].concat(Form, AllForms, FormFields, Answer);


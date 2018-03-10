const createForm = require('../helper/createForm');
// add joi validation for payloads
// add test cases wrt validations
const createFormHandler = (request, response) => {
  console.log(request.payload);
  const { formTitle } = request.payload;
  const { quesArray } = request.payload;
  const quesArrayJSON = JSON.parse(quesArray);
  createForm(formTitle, quesArrayJSON).then((responseCode) => {
    if (responseCode !== false) {
      response({
        code: 200,
      });
    } else {
      response({
        code: 500,
      });
    }
  });
};

module.exports = [{
  path: '/form/create',
  method: 'POST',
  handler: createFormHandler,
}];

const createForm = require('../helper/createForm');

const createFormHandler = (request, response) => {
  console.log(request.payload);
  const { formTitle } = request.payload;
  const { quesArray } = request.payload;
  //   console.log(quesArray);
  const quesArrayJSON = JSON.parse(quesArray);
  //   console.log(quesArrayJSON);
  createForm(formTitle, quesArrayJSON).then((responseCode) => {
    if (responseCode === 'false') {
      response({
        code: 500,
      });
    } else {
      response({
        code: 200,
      });
    }
  });
};

module.exports = [{
  path: '/form/create',
  method: 'POST',
  handler: createFormHandler,
}];

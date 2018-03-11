const showFormFields = require('../helper/showFormFields');

const showFormFieldsHandler = (request, response) => {
  // console.log(request.query);
  const { formid } = request.query;
  showFormFields(formid).then((allQuestionsWithFormTitle) => {
    response({
      code: 200,
      allQuestionsWithFormTitle,
    });
  });
};

module.exports = [{
  path: '/form/showFormFields',
  method: 'GET',
  handler: showFormFieldsHandler,
}];

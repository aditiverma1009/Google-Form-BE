const showFormFields = require('../helper/showFormFields');

const showFormFieldsHandler = (request, response) => {
  // console.log(request.query);
  const { formid } = request.query;
  showFormFields(formid).then((allQuestionsWithFormTitle) => {
    response({
      code: 200,
      allQuestionsWithFormTitle,
    });
  }).catch(() => response({
    code: 500,
  }));
};

module.exports = [{
  path: '/form/showFormFields',
  method: 'GET',
  handler: showFormFieldsHandler,
}];

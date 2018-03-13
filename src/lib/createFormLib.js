const Models = require('../../models');

const createFormsAndQues = (formTitle, quesArrayJSON) => Models.forms.create({
  formtitle: formTitle,
  questions: quesArrayJSON,
}, {
  include: Models.questions,
});

const createForm = (formTitle, quesArray) => {
  const quesArrayJSON = JSON.parse(quesArray);
  console.log(quesArrayJSON);
  return createFormsAndQues(formTitle, quesArrayJSON);
};

module.exports = {
  createForm,
  createFormsAndQues,
};


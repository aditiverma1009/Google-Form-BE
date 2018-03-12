const Models = require('../../models');

const createForm = (formTitle, quesArray) => {
  const quesArrayJSON = JSON.parse(quesArray);
  console.log(quesArrayJSON);
  // return Models.forms.create({ formtitle: formTitle });
  return Models.forms.create({
    formtitle: formTitle,
    questions: quesArrayJSON,
  }, {
    include: Models.questions,
  });
};

module.exports = {
  createForm,
};


// {
//   questext: quesArrayJSON.questext,
//   quesisreq: quesArrayJSON.quesisreq,
//   enum_questions_questype: quesArrayJSON.enum_questions_questype,
// }

const Models = require('../../models');

const createForm = (formTitle, quesArray) => Models.forms.create({
  formtitle: formTitle,
}).then((record) => {
  const formId = record.id;
  const quesArrayEditted = [];
  quesArray.forEach((eachQuestion) => {
    quesArrayEditted.push({
      formId,
      questext: eachQuestion.questext,
      quesisreq: eachQuestion.quesisreq,
      enum_questions_questype: eachQuestion.enum_questions_questype,
    });
  });
  return quesArrayEditted;
}).then(allQuesArray => Models.questions.bulkCreate(allQuesArray))
  .then(() => true)
  .catch(() => false);


module.exports = createForm;

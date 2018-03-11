const Models = require('../../models');

const createForm = (formTitle, quesArray) => Models.forms.createObject({ formtitle: formTitle })
  .then((record) => {
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
    console.log(quesArrayEditted);
    return quesArrayEditted;
  }).then(allQuesArray => Models.questions.bulkCreateObjects(allQuesArray))
  .then(() => true)
  .catch(() => false);


module.exports = createForm;

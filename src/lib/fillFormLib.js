const Models = require('../../models');

const fillAnsToQues = ansArrayJSON => Models.answers.bulkCreateObjects(ansArrayJSON);

const findQues = ques => Models.questions.findOne({
  where: { id: ques },
}).then((result) => {
  if (result === null) {
    return false;
  }
  return true;
});

const fillForm = (ansArray) => {
  const ansArrayJSON = JSON.parse(ansArray);
  const allPromise = [];
  for (let i = 0; i < ansArrayJSON.length; i += 1) {
    const questionpairanswers = ansArrayJSON[i];
    const quesid = questionpairanswers.questionId;
    findQues(quesid).then((result) => {
      if (result === true) {
        allPromise.push(Models.answers.createObject(ansArrayJSON[i]));
      }
    });
  }
  return Promise.all(allPromise);
};


module.exports = {
  fillForm,
  fillAnsToQues,
};


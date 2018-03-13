const Models = require('../../models');

const fillAnsToQues = ansArrayJSON => Models.answers.bulkCreateObjects(ansArrayJSON);

const fillForm = (ansArray) => {
  const ansArrayJSON = JSON.parse(ansArray);
  return fillAnsToQues(ansArrayJSON);
};

module.exports = {
  fillForm,
  fillAnsToQues,
};


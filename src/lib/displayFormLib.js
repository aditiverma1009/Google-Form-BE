const Models = require('../../models');

const findAllAssociatedQuestions = formid => Models.forms.findAll({
  where: {
    id: formid,
  },
  include: [{
    model: Models.questions,
  }],
});

const displayForm = (formid) => {
  console.log(formid);
  return findAllAssociatedQuestions(formid);
};

module.exports = {
  displayForm,
  findAllAssociatedQuestions,
};


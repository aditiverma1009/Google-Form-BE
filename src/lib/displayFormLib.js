const Models = require('../../models');

const findAllAssociatedQuestions = formid => Models.forms.findOne({
  where: {
    id: formid,
  },
  include: [{
    model: Models.questions,
  }],
}).then(result => result.dataValues)
  .then((result) => {
    console.log('hello');
    console.log('hi', result);
  });

const displayForm = (formid) => {
  console.log(formid);
  return findAllAssociatedQuestions(formid);
};

module.exports = {
  displayForm,
  findAllAssociatedQuestions,
};


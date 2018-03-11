const Models = require('../../models');

const showFormFields = (formid) => {
  const formidInt = Number(formid);


  return Models.forms.findAll({
    where: {
      id: formidInt,
    },
    include: [{
      model: Models.questions,
    }],
  });
};
module.exports = showFormFields;

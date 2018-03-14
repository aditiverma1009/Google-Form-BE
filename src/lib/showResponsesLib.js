const Models = require('../../models');

const showResponses = formid => Models.forms.findAll({
  where: {
    id: formid,
  },
  include: [{
    model: Models.questions,
    include: [{
      model: Models.answers,
    }],
  }],
});

module.exports = {
  showResponses,
};


const Models = require('../../models');

const displayForms = () => Models.forms.findAll({
  order: [['createdAt', 'DESC']],
});


module.exports = displayForms;

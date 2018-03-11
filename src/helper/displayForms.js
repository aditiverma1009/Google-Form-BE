const Models = require('../../models');

const displayForms = () => Models.forms.findAllObjectsOrder([['createdAt', 'DESC']]);


module.exports = displayForms;

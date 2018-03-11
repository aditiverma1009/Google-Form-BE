const Models = require('../../models');

const DeletedProjects = Models.forms.scope('deleted');
Project.scope('random', { method: ['accessLevel', 19] }).findAll();

const showFormFields = () => {


};


module.exports = showFormFields;

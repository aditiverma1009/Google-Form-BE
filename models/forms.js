const Sequelize = require('sequelize');

const Models = require('./questions');

// const { Op } = Sequelize;

module.exports = (sequelize, DataTypes) => {
  const forms = sequelize.define(
    'forms', {
      formtitle: DataTypes.STRING,
    },
    {},
  );

  forms.createObject = values => forms.create({
    formtitle: values,
  });

  forms.bulkCreateObjects = records => forms.bulkCreate(records);

  forms.destroyAllObjects = () => forms.destroy({
    truncate: true,
  });

  forms.countObjects = () => forms.count();

  forms.findAllObjects = options => forms.findAll({
    where: options,
  });

  forms.findAllObjectsOrder = order => forms.findAll({
    order,
  });

  forms.findAllObjectsNoWhere = () => forms.findAll();

  forms.associate = models => forms.hasMany(models.questions);


  return forms;
};

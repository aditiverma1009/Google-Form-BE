const Sequelize = require('sequelize');

const Models = require('./questions');

// const { Op } = Sequelize;

module.exports = (sequelize, DataTypes) => {
  const forms = sequelize.define(
    'forms', {
      formtitle: DataTypes.STRING,
    },
    {
      scopes: {
        allQuestions: {
          include: [
            { model: Models.questions },
          ],
        },
      },
    },
    {},
  );

  forms.createObject = values => forms.create(values);
  forms.bulkCreateObjects = records => forms.bulkCreate(records);
  forms.destroyAllObjects = () => forms.destroy({
    truncate: true,
  });
  forms.findAllObjects = options => forms.findAll({
    where: options,
  });
  forms.findAllObjectsNoWhere = () => forms.findAll();

  forms.associate = models => forms.hasMany(models.questions);

  return forms;
};

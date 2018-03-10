const Sequelize = require('sequelize');

const { Op } = Sequelize;

module.exports = (sequelize, DataTypes) => {
  const forms = sequelize.define(
    'forms', {
      formtitle: DataTypes.STRING,
    },
    {
      scopes: {
        allQuestions(value) {
          return {
            where: {
              formId: {
                [Op.eq]: value,
              },
            },
          };
        },
      },
    },
    {},
  );
  forms.associate = function (models) {
    forms.hasMany(models.questions);
  };
  return forms;
};

const Sequelize = require('sequelize');

// const { Op } = Sequelize;
const Models = require('./answers');

module.exports = (sequelize, DataTypes) => {
  const questions = sequelize.define(
    'questions', {
      formId: DataTypes.INTEGER,
      questext: DataTypes.STRING,
      quesisreq: DataTypes.BOOLEAN,
      enum_questions_questype: {
        type: DataTypes.ENUM,
        values: ['date', 'shortans', 'para'],
      },
    },
    {
      scopes: {
        allAnswers: {
          include: [
            { model: Models.answers },
          ],
        },
      },
    },
    {},
  );

  questions.destroyAllObjects = () => questions.destroy({
    truncate: true,
  });

  questions.countObjects = () => questions.count();

  questions.findOneObjectWhere = value => questions.findOne({
    where: { id: value },
  });

  questions.associate = models => questions.hasMany(models.answers);


  return questions;
};

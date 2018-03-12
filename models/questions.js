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

  questions.createObject = values => questions.create(values);
  questions.bulkCreateObjects = records => questions.bulkCreate(records);
  questions.destroyAllObjects = () => questions.destroy({
    truncate: true,
  });

  questions.countObjects = () => questions.count();

  questions.findAllObjects = options => questions.findAll({
    where: options,
  });
  questions.findAllObjectsNoWhere = () => questions.findAll();


  questions.associate = models => questions.hasMany(models.answers);


  return questions;
};

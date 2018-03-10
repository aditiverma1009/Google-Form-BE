

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
            allAnswers: function (value) {
                return {
                  where: {
                    questionId: {
                      [Op.eq]: value
                    },
                  },
                };
              },          
        },
    },
    {},
  ); questions.associate = function (models) {
    questions.hasMany(models.answers);
  };



  return questions;
};

models.sequelize.sync().then(function () {
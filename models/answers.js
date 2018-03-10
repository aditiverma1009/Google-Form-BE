

module.exports = (sequelize, DataTypes) => {
  const answers = sequelize.define('answers', {
    questionId: DataTypes.INTEGER,
    anstext: DataTypes.STRING,
  }, {});
  answers.associate = function (models) {

  };
  return answers;
};

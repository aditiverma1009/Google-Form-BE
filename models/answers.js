

module.exports = (sequelize, DataTypes) => {
  const answers = sequelize.define('answers', {
    questionId: DataTypes.INTEGER,
    anstext: DataTypes.STRING,
  }, {});

  answers.createObject = values => answers.create(values);
  answers.bulkCreateObjects = records => answers.bulkCreate(records);
  answers.destroyAllObjects = () => answers.destroy({ truncate: true });

  answers.associate = models => answers.belongsTo(models.questions);

  return answers;
};


// questions.destroyAllObjects = () => questions.destroy({
//   truncate: true,
// });

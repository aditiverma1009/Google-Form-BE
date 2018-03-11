

module.exports = (sequelize, DataTypes) => {
  const answers = sequelize.define('answers', {
    questionId: DataTypes.INTEGER,
    anstext: DataTypes.STRING,
  }, {});

  answers.createObject = values => answers.create(values);
  answers.bulkCreateObjects = records => answers.bulkCreate(records);
  answers.destroyAllObjects = () => answers.destroy({
    truncate: true,
  });
  answers.findAllObjects = options => answers.findAll({
    where: options,
  });
  answers.findAllObjectsLimitOrder = (options, limit, order) => answers.findAll({
    where: options,
    limit,
    order,
  });
  answers.findAllObjectsNoWhere = () => answers.findAll();


  answers.associate = () => null;
  return answers;
};

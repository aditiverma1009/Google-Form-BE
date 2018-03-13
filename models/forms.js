module.exports = (sequelize, DataTypes) => {
  const forms = sequelize.define(
    'forms', {
      formtitle: { type: DataTypes.STRING, unique: true },
    },
    {},
  );

  forms.createObject = values => forms.create({
    formtitle: values,
  });

  forms.destroyAllObjects = () => forms.destroy({
    truncate: true,
  });

  forms.countObjects = () => forms.count();

  forms.findAllObjectsOrder = order => forms.findAll({
    order,
  });

  forms.associate = models => forms.hasMany(models.questions);

  return forms;
};

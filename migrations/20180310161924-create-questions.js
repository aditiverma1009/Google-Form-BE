

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('questions', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    formId: {
      type: Sequelize.INTEGER,
    },
    questext: {
      type: Sequelize.STRING,
    },
    quesisreq: {
      type: Sequelize.BOOLEAN,
    },
    enum_questions_questype: {
      type: Sequelize.ENUM('date', 'shortans', 'para'),
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('questions'),
};

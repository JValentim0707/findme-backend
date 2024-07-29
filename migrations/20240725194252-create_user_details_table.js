'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_details', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      user_id: {
        type: Sequelize.UUID,
        references: {
          model: "users",
          key: "id"
        }
      },
      document: {
        type: Sequelize.STRING,
        allowNull: false
      },
      postcode: {
        type: Sequelize.STRING,
        allowNull: true
      },
      street: {
        type: Sequelize.STRING,
        allowNull: true
      },
      city: {
        type: Sequelize.STRING,
        allowNull: true
      },
      state: {
        type: Sequelize.STRING,
        allowNull: true
      },
      district : {
        type: Sequelize.STRING,
        allowNull: true
      },
      number: {
        type: Sequelize.STRING,
        allowNull: true
      },
      complement : {
        type: Sequelize.STRING,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      updated_at : {
        type: Sequelize.DATE,
        allowNull: true
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user_details');
  }
};
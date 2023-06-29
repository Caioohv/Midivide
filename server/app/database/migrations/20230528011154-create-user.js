'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING, 
        allowNull: false,
        unique: true
      },
      phone: {
        type: Sequelize.STRING, 
        allowNull: false,
        unique: true
      },
      name: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      verified: {
        type: Sequelize.BOOLEAN, 
        defaultValue: false
      },
      house: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE, 
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE, 
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users')
  }
}

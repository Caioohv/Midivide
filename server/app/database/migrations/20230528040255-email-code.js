'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('email_codes', {
      user_id: {
        type: Sequelize.INTEGER,
        unique: true,
        primaryKey: true,
        allowNull: false
      },
      factor: {
        type: Sequelize.INTEGER, 
        allowNull: false
      },
      expiration: {
        type: Sequelize.DATE, 
        allowNull: false
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
    await queryInterface.dropTable('email_code')
  }
}

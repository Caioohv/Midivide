'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('auths', {
      user_id: {
        type: Sequelize.INTEGER,
        unique: true,
        primaryKey: true,
        allowNull: false
      },
      passphrase: {
        type: Sequelize.STRING, 
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
    await queryInterface.dropTable('auth')
  }
}

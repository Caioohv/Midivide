'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tasks', { 
      id: {
        type: Sequelize.INTEGER,
        unique: true,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      house_identifier: {
        type: Sequelize.STRING,
        allowNull: false    
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      specific: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      responsible_user_id: {
        type: Sequelize.INTEGER
      },
      repeat: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      interval: {
        type: Sequelize.STRING
      },
      last_done: {
        type: Sequelize.DATE, 
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
    await queryInterface.dropTable('tasks')
  }
}

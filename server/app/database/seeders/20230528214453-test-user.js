'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      email: 'midivide@midivide.com',
      name: 'conta teste',
      verified: true,
      created_at: new Date(),
      updated_at: new Date()
    }], {})
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
    
  }
}

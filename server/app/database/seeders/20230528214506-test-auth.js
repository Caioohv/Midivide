'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('auths', [{
      user_id: 1,
      passphrase: '$2b$10$Zg/cqcjx6MdolXJXNhnxVemTHufjfJfcyXyTitxCNr1hgcT8XyWpu',
      created_at: new Date(),
      updated_at: new Date()
    }], {})
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('auths', null, {})
    
  }
}

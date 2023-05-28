'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.createTable('auth', {
			user_id: {
				type: Sequelize.INTEGER,
				unique: true,
				primaryKey: true,
				allowNull: false
			},
			passphase: {
				type: Sequelize.STRING, 
				allowNull: false
			}
		})
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.dropTable('auth')
	}
}

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
				allowNull: false
			},
			name: {
				type: Sequelize.STRING, 
				allowNull: false
			},
			validated: {
				type: Sequelize.BOOLEAN, 
				defaultValue: false
			}
		})
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.dropTable('users')
	}
}

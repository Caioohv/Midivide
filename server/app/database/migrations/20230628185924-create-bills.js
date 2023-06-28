'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.createTable('bills', { 
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
			value: {
				type: Sequelize.FLOAT,
				allowNull: false
			},
			due_date: {
				type: Sequelize.DATE
			},
			destination: {
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
		await queryInterface.dropTable('bills')
	}
}

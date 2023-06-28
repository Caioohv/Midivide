'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.createTable('debts', { 
			id: {
				type: Sequelize.INTEGER,
				unique: true,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true
			},
			bill_id: {
				type: Sequelize.INTEGER,
				allowNull: false		
			},
			payer_user_id: {
				type: Sequelize.INTEGER,
				allowNull: false		
			},
			paid: {
				type: Sequelize.BOOLEAN,
				defaultValue: false
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
		await queryInterface.dropTable('debts')
	}
}

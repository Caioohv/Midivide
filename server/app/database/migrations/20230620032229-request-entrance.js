'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.createTable('requests', { 
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
			requester_user_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				unique: true	
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
		await queryInterface.dropTable('requests')
	}
}

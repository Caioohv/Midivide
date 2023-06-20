'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.createTable('houses', { 
			identifier: {
				type: Sequelize.STRING,
				unique: true,
				primaryKey: true,
				allowNull: false		
			},
			owner_user_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				unique: true	
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false		
			},
			is_public: {
				type: Sequelize.BOOLEAN,
				allowNull: false		
			},
			vacancies: {
				type: Sequelize.INTEGER,
				allowNull: false		
			},
			occupied: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			state: {
				type: Sequelize.STRING,
				allowNull: false		
			},
			city: {
				type: Sequelize.STRING,
				allowNull: false		
			},
			neighborhood: {
				type: Sequelize.STRING,
				allowNull: false		
			},
			street: {
				type: Sequelize.STRING,
				allowNull: false		
			},
			number: {
				type: Sequelize.INTEGER,
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
		await queryInterface.dropTable('houses')
	}
}

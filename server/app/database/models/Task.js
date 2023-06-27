const { Model, DataTypes } = require('sequelize')

class Task extends Model {
	static init(sequelize) {
		super.init({
			id: {
				type: DataTypes.INTEGER,
				unique: true,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true
			},
			house_identifier: {
				type: DataTypes.STRING,
				allowNull: false		
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			specific: {
				type: DataTypes.BOOLEAN,
				allowNull: false
			},
			responsible_user_id: {
				type: DataTypes.INTEGER
			},
			repeat: {
				type: DataTypes.BOOLEAN,
				allowNull: false
			},
			interval: {
				type: DataTypes.STRING
			},
		}, {
			sequelize: sequelize
		})
	}
}

module.exports = Task
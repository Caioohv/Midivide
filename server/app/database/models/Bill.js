const { Model, DataTypes } = require('sequelize')

class Bill extends Model {
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
			value: {
				type: DataTypes.FLOAT,
				allowNull: false
			},
			due_date: {
				type: DataTypes.DATE
			},
			destination: {
				type: DataTypes.STRING
			}
		}, {
			sequelize: sequelize
		})
	}
}

module.exports = Bill
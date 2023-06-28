const { Model, DataTypes } = require('sequelize')

class Debt extends Model {
	static init(sequelize) {
		super.init({
			id: {
				type: DataTypes.INTEGER,
				unique: true,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true
			},
			bill_id: {
				type: DataTypes.INTEGER,
				allowNull: false		
			},
			payer_user_id: {
				type: DataTypes.INTEGER,
				allowNull: false		
			},
			paid: {
				type: DataTypes.BOOLEAN,
				defaultValue: false
			}
		}, {
			sequelize: sequelize
		})
	}
}

module.exports = Debt
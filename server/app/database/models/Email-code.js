const { Model, DataTypes } = require('sequelize')

class EmailCode extends Model {
	static init(sequelize) {
		super.init({
			user_id: {
				type: DataTypes.INTEGER,
				unique: true,
				primaryKey: true,
				allowNull: false
			},
			factor: {
				type: DataTypes.INTEGER, 
				allowNull: false
			},
			expiration: {
				type: DataTypes.DATE, 
				allowNull: false
			}
		}, {
			sequelize: sequelize
		})
	}
}

module.exports = EmailCode
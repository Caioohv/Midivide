const { Model, DataTypes } = require('sequelize')

class Request extends Model {
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
			requester_user_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				unique: true	
			}
		}, {
			sequelize: sequelize
		})
	}
}

module.exports = Request
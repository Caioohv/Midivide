const { Model, DataTypes } = require('sequelize')

class AuthToken extends Model {
  static init(sequelize) {
    super.init({
      user_id: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        allowNull: false
      },
      token: {
        type: DataTypes.STRING, 
        allowNull: false
      },
      expiration: {
        type: DataTypes.DATE, 
        allowNull: false
      },
    }, {
      sequelize: sequelize
    })
  }
}

module.exports = AuthToken
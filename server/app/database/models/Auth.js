const { Model, DataTypes } = require('sequelize')

class Auth extends Model {
  static init(sequelize) {
    super.init({
      user_id: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        allowNull: false
      },
      passphrase: {
        type: DataTypes.STRING, 
        allowNull: false
      }
    }, {
      sequelize: sequelize
    })
  }
}

module.exports = Auth
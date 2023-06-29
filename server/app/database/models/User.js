const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING, 
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING, 
        allowNull: false
      },
      name: {
        type: DataTypes.STRING, 
        allowNull: false
      },
      verified: {
        type: DataTypes.BOOLEAN, 
        defaultValue: false
      },
      house: {
        type: DataTypes.STRING
      },
    }, {
      sequelize: sequelize
    })
  }
}

module.exports = User
const { Model, DataTypes } = require('sequelize')

class Notice extends Model {
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
      content: {
        type: DataTypes.STRING,
        allowNull: false    
      },
    }, {
      sequelize: sequelize
    })
  }
}

module.exports = Notice
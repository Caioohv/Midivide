const { Model, DataTypes } = require('sequelize')

class House extends Model {
  static init(sequelize) {
    super.init({
      identifier: {
        type: DataTypes.STRING,
        unique: true,
        primaryKey: true,
        allowNull: false    
      },
      owner_user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true  
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false    
      },
      is_public: {
        type: DataTypes.BOOLEAN,
        allowNull: false    
      },
      vacancies: {
        type: DataTypes.INTEGER,
        allowNull: false    
      },
      occupied: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false    
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false    
      },
      neighborhood: {
        type: DataTypes.STRING,
        allowNull: false    
      },
      street: {
        type: DataTypes.STRING,
        allowNull: false    
      },
      number: {
        type: DataTypes.INTEGER,
        allowNull: false    
      },
    }, {
      sequelize: sequelize
    })
  }
}

module.exports = House
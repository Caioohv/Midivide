const User = require('../database/models/User')

class user {
  findByEmail(email) {
    return User.findOne({ 
      where: { email: email }
    })
  }

  findById(id) {
    return User.findOne({ 
      where: { id: id }
    })
  }

  findByIds(ids) {
    return User.findAll({ 
      where: { id: {in: ids} }
    })
  }

  findByHouse(house) {
    return User.findAll({ 
      where: { house }
    })
  }

  register(email, phone, name, verified){
    return User.create({ 
      email, phone, name, verified 
    })
  } 

  activate(user_id) {
    return User.update(
      { verified: true }, 
      { where: { id: user_id }})
  }

  associate(house_identifier, user_id) {
    return User.update({
      house: house_identifier
    }, { where: {
      id: user_id
    }})
  }
  dissociate(user_id) {
    return User.update({
      house: null
    }, { where: {
      id: user_id
    }})
  }
}

module.exports = user
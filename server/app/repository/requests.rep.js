const Request = require('../database/models/Request')

class request {
  create(house_identifier, requester_user_id){
    return Request.create({ 
      house_identifier, requester_user_id
    })
  }

  delete(requester_user_id){
    return Request.destroy({
      where: requester_user_id
    })
  }

  deleteById(id){
    return Request.destroy({
      where: {id}
    })
  }

  searchByUserId(requester_user_id) {
    return Request.findOne({
      where: {requester_user_id}, 
      attributes: {exclude: ['createdAt', 'updatedAt']}
    })
  }

  searchByHouse(house_identifier) {
    return Request.findOne({
      where: {house_identifier}
    })
  }

  searchAllByHouse(house_identifier) {
    return Request.findAll({
      where: {house_identifier}
    })
  }

  searchById(id) {
    return Request.findOne({
      where: {id}, 
      attributes: {exclude: ['createdAt', 'updatedAt']}
    })
  }
}

module.exports = request
const House = require('../database/models/House')

class house {
  create(identifier, owner_user_id, name, is_public, vacancies, occupied, state, city, neighborhood, street, number){
    return House.create({ 
      identifier, owner_user_id, name, is_public, vacancies, occupied, state, city, neighborhood, street, number 
    })
  }

  update(identifier, name, is_public, vacancies, occupied, state, city, neighborhood, street, number){
    return House.update(
      { name, is_public, vacancies, occupied, state, city, neighborhood, street, number }, 
      {  where: {identifier} })
  }

  delete(identifier){
    return House.destroy({
      where: { identifier }
    })
  }

  searchByIdentifier(identifier) {
    return House.findOne({
      where: {identifier}, 
      attributes: {exclude: ['createdAt', 'updatedAt']}
    })
  }

  findByCity(city) {
    return House.findAll({
      where: {city}, 
      attributes: {exclude: ['createdAt', 'updatedAt']}
    })
  }

  findByCityAndNeighborhood(city, neighborhood) {
    return House.findAll({
      where: {city, neighborhood}, 
      attributes: {exclude: ['createdAt', 'updatedAt']}
    })
  }

  updateOccupation(identifier, occupied){
    return House.update(
      { occupied }, 
      {  where: {identifier} })
  } 

}

module.exports = house 
const Notice = require('../database/models/Notice')

class notices {
  create(house_identifier, content){
    return Notice.create({ 
      house_identifier, content
    })
  }

  delete(id){
    return Notice.destroy({
      where: {id}
    })
  }

  searchByHouse(house_identifier) {
    return Notice.findAll({
      where: {house_identifier}
    })
  }

}

module.exports = notices
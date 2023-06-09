const HouseBs = require('../business/house.bs')
const errorHandler = require('../utils/error-handler')
const status = require('../utils/status')

class House {

  async create(req, res) {
    try {
      let house = new HouseBs(req, res)
      let response = await house.create()

      res.status(status['SUCCESS']).json(response)

    }catch(err) {
      errorHandler(err, res)
    }
  }

  async getMyHouse(req, res) {
    try {
      let house = new HouseBs(req, res)
      let response = await house.getMyHouse()

      res.status(status['SUCCESS']).json(response)

    }catch(err) {
      errorHandler(err, res)
    }
  }

  async getneighborHoodsByCity(req, res) {
    try {
      let house = new HouseBs(req, res)
      let response = await house.getneighborHoodsByCity()

      res.status(status['SUCCESS']).json(response)

    }catch(err) {
      errorHandler(err, res)
    }
  }

  async getHousesByCityAndNeighborhood(req, res) {
    try {
      let house = new HouseBs(req, res)
      let response = await house.getHousesByCityAndNeighborhood()

      res.status(status['SUCCESS']).json(response)

    }catch(err) {
      errorHandler(err, res)
    }
  }

  async getHousesByCode(req, res) {
    try {
      let house = new HouseBs(req, res)
      let response = await house.getHousesByCode()

      res.status(status['SUCCESS']).json(response)

    }catch(err) {
      errorHandler(err, res)
    }
  }

  async leave(req, res) {
    try {
      let house = new HouseBs(req, res)
      let response = await house.leave()

      res.status(status['SUCCESS']).json(response)

    }catch(err) {
      errorHandler(err, res)
    }
  }

  async listMembers(req, res) {
    try{
      let house = new HouseBs(req, res)
      let response = await house.listMembers()

      res.status(status['SUCCESS']).json(response)
    }catch(err) {
      errorHandler(err, res)
    }
  }

  async deleteMember(req, res) {
    try{
      let house = new HouseBs(req, res)
      let response = await house.deleteMember()

      res.status(status['SUCCESS']).json(response)
    }catch(err) {
      errorHandler(err, res)
    }
  }

  async update(req, res) {
    try{
      let house = new HouseBs(req, res)
      let response = await house.update()

      res.status(status['SUCCESS']).json(response)
    }catch(err) {
      errorHandler(err, res)
    }
  }
}

module.exports = House
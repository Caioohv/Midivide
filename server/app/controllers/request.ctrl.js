const RequestBs = require('../business/request.bs')
const errorHandler = require('../utils/error-handler')
const status = require('../utils/status')

class Request {

  async create(req, res) {
    try {
      let request = new RequestBs(req, res)
      let response = await request.create()

      res.status(status['SUCCESS']).json(response)

    }catch(err) {
      errorHandler(err, res)
    }
  }

  async listByHouse(req, res) {
    try{
      let request = new RequestBs(req, res)
      let response = await request.listByHouse()

      res.status(status['SUCCESS']).json(response)
    }catch(err) {
      errorHandler(err, res)
    }
  }

  async acceptOrDecline(req, res) {
    try{
      let request = new RequestBs(req, res)
      let response = await request.acceptOrDecline()

      res.status(status['SUCCESS']).json(response)
    }catch(err) {
      errorHandler(err, res)
    }
  }

  async listMyRequest(req, res) {
    try{
      let request = new RequestBs(req, res)
      let response = await request.listMyRequest()

      res.status(status['SUCCESS']).json(response)
    }catch(err) {
      errorHandler(err, res)
    }
  }

  async cancelRequest(req, res) {
    try{
      let request = new RequestBs(req, res)
      let response = await request.cancelRequest()

      res.status(status['SUCCESS']).json(response)
    }catch(err) {
      errorHandler(err, res)
    }
  }

}

module.exports = Request
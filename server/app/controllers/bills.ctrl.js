const Bills = require('../business/bills.bs')

const error = require('../utils/error-handler')
const status = require('../utils/status')

class Bill {
  
  async create(req, res) {
    const bills = new Bills(req, res)

    try{
      let response = await bills.create()
      res.status(status['SUCCESS']).json(response)

    }catch(err){
      error(err, res)
      
    }
  }

  async getMyBills(req, res) {
    const bills = new Bills(req, res)

    try{
      let response = await bills.getMyBills()
      res.status(status['SUCCESS']).json(response)

    }catch(err){
      error(err, res)
      
    }
  }

  async getHouseBills(req, res) {
    const bills = new Bills(req, res)

    try{
      let response = await bills.getHouseBills()
      res.status(status['SUCCESS']).json(response)

    }catch(err){
      error(err, res)
      
    }
  }

  async markAsPaid(req, res) {
    const bills = new Bills(req, res)

    try{
      let response = await bills.markAsPaid()
      res.status(status['SUCCESS']).json(response)

    }catch(err){
      error(err, res)
      
    }
  }

}

module.exports = Bill
const Bills = require('../business/bills.bs')

const error = require('../utils/error-handler')
const status = require('../utils/status')

class Bill {
	
	async create(req, res) {
		const bills = new Bills(req, res)

		try{
			await bills.create()
			res.status(status['SUCCESS']).send()

		}catch(err){
			error(err, res)
			
		}
	}

	async getMyBills(req, res) {
		const bills = new Bills(req, res)

		try{
			await bills.getMyBills()
			res.status(status['SUCCESS']).send()

		}catch(err){
			error(err, res)
			
		}
	}

	async getAllBills(req, res) {
		const bills = new Bills(req, res)

		try{
			await bills.getAllBills()
			res.status(status['SUCCESS']).send()

		}catch(err){
			error(err, res)
			
		}
	}

}

module.exports = Bill
const Register = require('../business/register.bs')
const error = require('../utils/error-handler')
const status = require('../utils/status')

class Auth {
	
	async startRegister(req, res) {
		const register = new Register(req, res)

		try{
			await register.start()
			res.json(status['STARTED']).send()

		}catch(err){
			error(err, res)
			
		}

	}

	async confirmSecondFactor(req, res) {
		const register = new Register(req, res)

		try{
			await register.confirmSecondFactor()
			res.json(status['COMPLETED']).send()

		}catch(err){
			error(err, res)
			
		}

	}


}

module.exports = Auth
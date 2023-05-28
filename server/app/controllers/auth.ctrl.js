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


}

module.exports = Auth
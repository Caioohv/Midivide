const UserBs = require('../business/user.bs')
const error = require('../utils/error-handler')
const status = require('../utils/status')

class User {

	async detail(req, res) {
		const user = new UserBs(req, res)

		try{
			let response = await user.detail()
			res.status(status['SUCCESS']).json(response)

		}catch(err){
			error(err, res)
			
		}
	}


}

module.exports = User
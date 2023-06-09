const moment = require('moment')

const auth = require('../repository/auth-tokens.rep')
const user = require('../repository/user.rep')
const status = require('../utils/status')

module.exports = (req, res, next) => {
	let authorizationToken = req.headers.authorization.split(' ')[1]

	let tokenData = auth.findByToken(authorizationToken)
	
	if(moment(moment.now()).diff(tokenData.expiration) > 0){
		res.status(status['EXPIRATED-TOKEN']).send()

	}else{
		let userData = user.findById(tokenData.user_id)

		req.user = {
			id: userData.id,
			name: userData.name,
			email: userData.email
		}

		next()
	}

}
const moment = require('moment')

const auth = require('../repository/auth-tokens.rep')
const user = require('../repository/user.rep')
const status = require('../utils/status')

module.exports = async (req, res, next) => {
	const authDB = new auth()
	const userDB = new user()


	let authorizationToken = req.headers.authorization
		? req.headers.authorization.split(' ')[1] : 'unauthorized'

	let tokenData = await authDB.findByToken(authorizationToken)

	if(!tokenData){
		res.status(status['UNAUTHORIZED-TOKEN']).send()

	}else if(moment(moment.now()).add(3, 'hours').diff(tokenData.expiration) <= 0){
		res.status(status['EXPIRATED-TOKEN']).send()

	}else{
		let userData = await userDB.findById(tokenData.user_id)

		req.user = {
			id: userData.id,
			name: userData.name,
			email: userData.email
		}
		
		let expiration = new Date(moment(moment.now()).add(15, 'minutes').subtract(3, 'hours'))

		await authDB.refresh(expiration, userData.id)

		next()
	}

}
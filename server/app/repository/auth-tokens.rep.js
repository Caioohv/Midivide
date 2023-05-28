const AuthTokens = require('../database/models/Auth-token')

class auth {
	register(user_id, token, expiration){
		console.log('Auth Token --> Creating: ', (user_id))
		return AuthTokens.create(
			{ user_id, token, expiration }, {raw: true})
	}

	refresh(user_id, expiration){
		console.log('Auth Token --> Refreshing: ', (user_id))
		return AuthTokens.update(
			{ user_id, expiration }, {raw: true})
	}

	find(user_id){
		console.log('Auth Token --> Creating: ', (user_id))
		return AuthTokens.findOne({where: { user_id }, raw: true})
	}

	clear(user_id){
		console.log('Auth Token --> Deleting all for: ', (user_id))
		return AuthTokens.destroy({where: {user_id}, raw: true})
	}
}

module.exports = auth
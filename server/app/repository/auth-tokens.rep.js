const AuthTokens = require('../database/models/Auth-token')

class auth {
	register(user_id, token, expiration){
		return AuthTokens.create(
			{ user_id, token, expiration }, {raw: true})
	}

	refresh(expiration, user_id){
		return AuthTokens.update(
			{ expiration }, {where: { user_id },raw: true})
	}

	find(user_id){
		return AuthTokens.findOne({where: { user_id }, raw: true})
	}

	findByToken(token){
		return AuthTokens.findOne({where: { token }, raw: true})
	}

	clear(user_id){
		return AuthTokens.destroy({where: {user_id}, raw: true})
	}
}

module.exports = auth
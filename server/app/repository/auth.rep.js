const Auth = require('../database/models/Auth')

class auth {
	register(user_id, passphrase){
		console.log('Auth --> Creating: ', (user_id))
		return Auth.create(
			{ user_id, passphrase })
	}

	find(user_id){
		console.log('Auth --> Listing: ', (user_id))
		return Auth.findOne({where: { user_id }})
	}
}

module.exports = auth
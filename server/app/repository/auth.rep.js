const Auth = require('../database/models/Auth')

class auth {
	register(user_id, passphrase){
		console.log('Auth --> Creating: ', (user_id))
		return Auth.create(
			{ user_id, passphrase })
	}
}

module.exports = auth
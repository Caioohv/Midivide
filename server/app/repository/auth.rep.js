const Auth = require('../database/models/Auth')

class auth {
	register(user_id, passphrase){
		return Auth.create({ 
			user_id, passphrase 
		})
	}

	find(user_id){
		return Auth.findOne({
			where: { user_id }
		})
	}
}

module.exports = auth
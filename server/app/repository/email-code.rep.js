const EmailCode = require('../database/models/Email-code')

class emailCode {
	register(user_id, factor, expiration){
		console.log('Email Code --> Registering for: ', (user_id))
		return EmailCode.create(
			{ user_id, factor, expiration })
	}

	verify(user_id){
		console.log('Email Code --> Verifying for: ', (user_id))
		return EmailCode.findByPk(user_id)
	}
}

module.exports = emailCode
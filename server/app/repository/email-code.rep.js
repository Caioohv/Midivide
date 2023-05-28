const EmailCode = require('../database/models/Email-code')

class emailCode {
	register(user_id, factor, expiration){
		console.log('Email Code --> Registering for: ', (user_id))
		return EmailCode.create(
			{ user_id, factor, expiration })
	}

	resend(user_id, factor, expiration){
		console.log('Email Code --> Resending for: ', (user_id))
		return EmailCode.update(
			{ factor, expiration }, {	where: {user_id} })
	}

	findByUserId(user_id){
		console.log('Email Code --> Verifying for: ', (user_id))
		return EmailCode.findByPk(user_id)
	}

	clear(user_id){
		console.log('Email Code --> Deleting all for: ', (user_id))
		return EmailCode.destroy({where: {user_id} })
	}
}

module.exports = emailCode
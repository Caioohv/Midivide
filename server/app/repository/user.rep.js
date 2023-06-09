const User = require('../database/models/User')

class user {
	findByEmail(email) {
		console.log('User --> Searching for: ', (email))
		return User.findOne(
			{ where: { email: email }})
	}

	findById(id) {
		console.log('User --> Searching for: ', (id))
		return User.findOne(
			{ where: { id: id }})
	}

	register(email, name, verified){
		console.log('User --> Creating: ', (email))
		return User.create(
			{ email, name, verified })
	} 

	activate(user_id) {
		console.log('User --> Activating: ', (user_id))
		return User.update(
			{ verified: true }, 
			{ where: { id: user_id }})
	}
}

module.exports = user
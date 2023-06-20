const House = require('../database/models/House')

class emailCode {
	create(identifier, owner_user_id, name, is_public, vacancies, state, city, neighborhood, street, number){
		return House.create(
			{ identifier, owner_user_id, name, is_public, vacancies, state, city, neighborhood, street, number })
	}

	update(identifier, name, is_public, vacancies, state, city, neighborhood, street, number){
		return House.update(
			{ name, is_public, vacancies, state, city, neighborhood, street, number }, {	where: {identifier} })
	}

	delete(identifier){
		return House.delete({where: identifier})
	}

	searchByIdentifier(identifier) {
		return House.findOne({where: {identifier}})
	}
}

module.exports = emailCode
const Task = require('../database/models/Task')

class tasks {
	create(house_identifier, name, specific, responsible_user_id, repeat, interval){
		return Task.create({ 
			house_identifier, name, specific, responsible_user_id, repeat, interval
		})
	}

	update(id, house_identifier, name, specific, responsible_user_id, repeat, interval){
		return Task.update({ 
			house_identifier, name, specific, responsible_user_id, repeat, interval
		},{
			where: {id}
		})
	}

	markAsDone(id, last_done){
		return Task.update({ 
			last_done
		},{
			where: {id}
		})
	}

	delete(id){
		return Task.destroy({
			where: {id}
		})
	}

	searchByUserId(responsible_user_id) {
		return Task.findAll({
			where: {responsible_user_id}
		})
	}

	searchByHouse(house_identifier) {
		return Task.findAll({
			where: {house_identifier}
		})
	}

}

module.exports = tasks
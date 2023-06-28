const Bill = require('../database/models/Bill.js')

class bill {
	create(house_identifier, name, value, shared_to, due_date, destination){
		return Bill.create({ 
			house_identifier, name, value, shared_to, due_date, destination 
		},
		{logging: console.log})
	}

	findById(id){
		return Bill.findOne({
			where: { id }
		})
	}

	findByHouse(id){
		return Bill.findAll({
			where: { id }
		})
	}
}

module.exports = bill
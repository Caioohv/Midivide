const Debt = require('../database/models/Debt')

class bill {
	create(payer_user_id, bill_id){
		return Debt.create({ 
			bill_id, payer_user_id, paid: false
		})
	}

	bulkCreate(debts){
		return Debt.bulkCreate(debts)
	}

	findById(id){
		return Debt.findOne({
			where: { id }
		})
	}

	findByPayerUserId(payer_user_id){
		return Debt.findAll({
			where: { payer_user_id }
		})
	}

}
module.exports = bill
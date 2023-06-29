const Debt = require('../database/models/Debt')

class debt {
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

  findByBillId(bill_id){
    return Debt.findAll({
      where: { bill_id }
    })
  }

  findByPayerUserId(payer_user_id){
    return Debt.findAll({
      where: { payer_user_id }
    })
  }

  findByPayerUserIdAndBillId(payer_user_id, bill_id){
    return Debt.findOne({
      where: { payer_user_id, bill_id },
      logging: console.log
    })
  }

  markAsPaid(id){
    return Debt.update(
      { paid: true},
      {where: { id }}
    )
  }

  deleteByBillId(bill_id){
    return Debt.destroy({
      where: { bill_id }
    })
  }



}
module.exports = debt
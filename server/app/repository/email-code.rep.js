const EmailCode = require('../database/models/Email-code')

class emailCode {
  register(user_id, factor, expiration){
    return EmailCode.create(
      { user_id, factor, expiration }
    )
  }

  resend(user_id, factor, expiration){
    return EmailCode.update(
      { factor, expiration }, 
      {  where: {user_id} }
    )
  }

  findByUserId(user_id){
    return EmailCode.findByPk(user_id)
  }

  clear(user_id){
    return EmailCode.destroy(
      {where: {user_id} }
    )
  }
}

module.exports = emailCode
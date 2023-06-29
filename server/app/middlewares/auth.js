const moment = require('moment')

const auth = require('../repository/auth-tokens.rep')
const user = require('../repository/user.rep')
const status = require('../utils/status')

module.exports = async (req, res, next) => {
  const authDB = new auth()
  const userDB = new user()


  let authorization = req.headers.authorization

  if(!authorization || authorization == null || authorization == 'null'){
    res.status(status['UNAUTHORIZED-TOKEN']).json({
      identifier: 'unauthorized token',
      message: 'Autenticação necessária'
    })

  }else {

    let authorizationToken = authorization.split(' ')[1]

    let tokenData = await authDB.findByToken(authorizationToken)
  
    if(!tokenData){
      res.status(status['UNAUTHORIZED-TOKEN']).json({
        identifier: 'unauthorized token',
        message: 'Autenticação necessária'
      })
  
    }else if(moment(moment.now()).add(3, 'hours').diff(tokenData.expiration) <= 0){
      res.status(status['EXPIRATED-TOKEN']).json({
        identifier: 'expirated token',
        message: 'Autenticação necessária'
      })
  
    }else{
      let userData = await userDB.findById(tokenData.user_id)
  
      req.user = {
        id: userData.id,
        name: userData.name,
        email: userData.email,
        house: userData.house
      }
      
      let expiration = new Date(moment(moment.now()).add(15, 'minutes').subtract(3, 'hours'))
  
      await authDB.refresh(expiration, userData.id)
  
      next()
    }
  }
}
const bcrypt = require('bcrypt')
const moment = require('moment')

const userRep = require('../repository/user.rep')
const authRep = require('../repository/auth.rep')
const requestRep = require('../repository/requests.rep')
const authTokensRep = require('../repository/auth-tokens.rep')

const status = require('../utils/status')

class Login {
  constructor(req){
    this.req = req
    this.payload = req.body
    this.userDB = new userRep()
    this.authDB = new authRep()
    this.requestDB = new requestRep()
    this.authTokensDB = new authTokensRep()
  }

  async generateAuthToken(user_id){
    let createTokenPart = function() {
      return Math.random().toString(36).substr(2)
    }
    
    let createToken = function() {
      return createTokenPart() + createTokenPart() + createTokenPart()
    }
    
    let token = createToken()

    let expiration = moment(moment.now()).add(15, 'minutes')

    await this.authTokensDB.clear(user_id)
    return this.authTokensDB.register(user_id, token, new Date(expiration))
  }

  async isWaitingRequest(user_id) {
    let requests = await this.requestDB.searchByUserId(user_id)
    if(!requests) return false
    return true
  }

  async signin() {
    try{
      let email = this.payload.email
      let password = this.payload.password
 
      let user = await this.userDB.findByEmail(email)
      let userauth = await this.authDB.find(user.id)

      let authenticated = false

      let isWaiting = await this.isWaitingRequest(user.id)

      if(user && userauth && user.verified){
        if(await bcrypt.compare(password, userauth.passphrase)){
          authenticated = true
          let token = await this.generateAuthToken(user.id)
          return {
            token: 'Basic '+token.token,
            isWaiting: isWaiting
          }
        }
      }

      if(!authenticated)
        throw {
          identifier: 'invalid credentials'
        }
      

    }catch(err){
      console.error(err)

      throw {
        message: 'Ops! ocorreu um erro ao acessar a sua conta!',
        identifier: err.identifier,
        status: status['WRONG-CREDENTIALS']
      }
    }
  }

}

module.exports = Login
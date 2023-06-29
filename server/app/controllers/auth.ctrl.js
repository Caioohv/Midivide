const Register = require('../business/register.bs')
const Login = require('../business/login.bs')
const error = require('../utils/error-handler')
const status = require('../utils/status')

class Auth {
  
  async startRegister(req, res) {
    const register = new Register(req, res)

    try{
      await register.start()
      res.status(status['STARTED']).send()

    }catch(err){
      error(err, res)
      
    }
  }

  async confirmSecondFactor(req, res) {
    const register = new Register(req, res)

    try{
      await register.confirmSecondFactor()
      res.status(status['COMPLETED']).send()

    }catch(err){
      error(err, res)
      
    }
  }

  async login(req, res) {
    const login = new Login(req, res)

    try{
      let response = await login.signin()
      res.status(status['SUCCESS']).json(response)

    }catch(err){
      error(err, res)
      
    }
  }


}

module.exports = Auth
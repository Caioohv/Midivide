const userRep = require('../repository/user.rep')
const houseRep = require('../repository/house.rep')

const status = require('../utils/status')

class User {
  constructor(req){
    this.req = req
    this.payload = req.body
    this.userDB = new userRep()
    this.houseDB = new houseRep()
  }

  async detail(){
    let user = this.req.user

    try{
      let userData = await this.userDB.findById(user.id)

      delete userData.createdAt
      delete userData.updatedAt
      
      let response = {
        ...userData,
      }

      let userHouse = await this.houseDB.searchByIdentifier(userData.house)

      if(userHouse) {
        response.admin = userHouse.owner_user_id === userData.id,
        response.house = userHouse  
      }else{
        response.admin = false
        response.house = null
      }
      
      return response

    }catch(err) {
      throw {
        message: 'Ops! ocorreu um erro ao listar seus dados!',
        identifier: err.identifier ? err.identifier : 'error while fetching data',
        status: status['FAILED-PROCESS']
      }
    }
  }
}

module.exports = User
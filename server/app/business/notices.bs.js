const userRep = require('../repository/user.rep')
const NoticesRep = require('../repository/notices.rep')

const status = require('../utils/status')

class Notices {
  constructor(req){
    this.req = req
    this.payload = req.body
    this.userDB = new userRep()
    this.noticeDB = new NoticesRep()
  }

  async create(){
    try{
      let content = this.req.body.content
      let house = this.req.user.house
  
      return await this.noticeDB.create(house, content)
    }catch(err){
      throw {
        message: 'Ops! ocorreu um erro ao criar a sua conta!',
        identifier: err.identifier,
        status: status['INVALID-DATA']
      }
    }
  }

  async list(){
    try{
      let house = this.req.user.house

      let notices = await this.noticeDB.searchByHouse(house)

      return notices
    }catch(err){
      throw {
        message: 'Ops! ocorreu um erro ao criar a sua conta!',
        identifier: err.identifier,
        status: status['INVALID-DATA']
      }
    }
  }

  async delete(){
    try{
      let id = this.req.body.id

      return await this.noticeDB.delete(id)
    }catch(err){
      throw {
        message: 'Ops! ocorreu um erro ao criar a sua conta!',
        identifier: err.identifier,
        status: status['INVALID-DATA']
      }
    }
  }

}

module.exports = Notices
const userRep = require('../repository/user.rep')

const status = require('../utils/status')

class Login {
	constructor(req){
		this.req = req
		this.payload = req.body
		this.userDB = new userRep()
	}

	async detail(){
		let user = this.req.user

		try{
			let userData = await this.userDB.findById(user.id)

			delete userData.createdAt
			delete userData.updatedAt

			return userData

		}catch(err) {
			throw {
				message: 'Ops! ocorreu um erro ao listar seus dados!',
				identifier: err.identifier ? err.identifier : 'error-while-select',
				status: status['FAILED-PROCESS']
			}
		}
		

		

	}


	

}

module.exports = Login
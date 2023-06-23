const userRep = require('../repository/user.rep')
const houseRep = require('../repository/house.rep')
const requestRep = require('../repository/requests.rep')

const status = require('../utils/status')

class Request {
	constructor(req){
		this.req = req
		this.payload = req.body
		this.params = req.params
		this.query = req.query
		this.userDB = new userRep()
		this.houseDB = new houseRep()
		this.requestDB = new requestRep()
	}

	async create(){
		let user = this.req.user
		let house_identifier = this.payload.house

		try{
			let houseInfo = await await this.houseDB.searchByIdentifier(house_identifier)
			let available_vacancies = houseInfo.vacancies - houseInfo.occupied
			
			if(available_vacancies <= 0 ) throw { identifier: 'no vacancies available'}
			if(user.house) throw { identifier: 'user already in a house'}

			let request = await this.requestDB.create(house_identifier, user.id)
			if(request) return { status: 'waiting'}


		}catch(err) {
			throw {
				message: 'Ops! ocorreu um erro ao solicitar entrada!',
				identifier: err.identifier ? err.identifier : 'error while requesting occupation',
				status: status['FAILED-PROCESS']
			}
		}
	}

	async listByHouse(){
		let user = this.req.user

		try{
			let requests = await this.requestDB.searchAllByHouse(user.house)
			
			let promises = requests.map(async (request) => {
				let requester = await this.userDB.findById(request.requester_user_id)
				return {
					request: {
						id: request.id,
						requester: requester
					}
				}
			})

			let requesters = await Promise.all(promises)

			return requesters

		}catch(err) {
			throw {
				message: 'Ops! ocorreu um erro ao listar as solicitações!',
				identifier: err.identifier ? err.identifier : 'error while listing requests',
				status: status['FAILED-PROCESS']
			}
		}
	}

	async acceptOrDecline(){
		let request_id = this.params.request_id
		let decision = this.params.decision

		try{
			
			let request = await this.requestDB.searchById(request_id)

			if(decision === 'accept'){
				await this.requestDB.deleteById(request.id)
				let house = await this.houseDB.searchByIdentifier(request.house_identifier)
				let user = await this.userDB.findById(request.requester_user_id)
				await this.houseDB.updateOccupation(request.house_identifier, house.occupied + 1)
				await this.userDB.associate(request.house_identifier, user.id)
			}else{
				await this.requestDB.deleteById(request.id)
			}

		}catch(err) {
			console.log('\n','----------->err: ', (err))
			throw {
				message: 'Ops! ocorreu um erro ao aceitar ou negar a solicitaçãi!',
				identifier: err.identifier ? err.identifier : 'error while accepting requests',
				status: status['FAILED-PROCESS']
			}
		}
	}

	async listMyRequest(){
		let user = this.req.user

		try{
			let requests = await this.requestDB.searchByUserId(user.id)
			if(!requests) return {status: 'not waiting'}

			let house = await this.houseDB.searchByIdentifier(requests.house_identifier)
			
			if(requests) return {status: 'waiting', house}
			else return {status: 'not waiting'}

		}catch(err) {
			throw {
				message: 'Ops! ocorreu um erro ao listar as solicitações!',
				identifier: err.identifier ? err.identifier : 'error while listing requests',
				status: status['FAILED-PROCESS']
			}
		}
	}

	async cancelRequest(){
		try{
			let userId = this.req.user.id
			let request = await this.requestDB.searchByUserId(userId)
			
			return await this.requestDB.deleteById(request.id)	

		}catch(err) {
			throw {
				message: 'Ops! ocorreu um erro ao cancelar a solicitaçãi!',
				identifier: err.identifier ? err.identifier : 'error while cancelling request',
				status: status['FAILED-PROCESS']
			}
		}
	}


}

module.exports = Request
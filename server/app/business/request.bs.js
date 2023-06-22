const userRep = require('../repository/user.rep')
const houseRep = require('../repository/house.rep')
const requestRep = require('../repository/requests.rep')

const status = require('../utils/status')

class Request {
	constructor(req){
		this.req = req
		this.payload = req.body
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

			let requesterIds = requests.map(request => request.requester_user_id)
			
			let promises = requesterIds.map(async (user_id) => {
				return this.userDB.findById(user_id)
			})

			let requesters = await Promise.all(promises)

			return requesters

		}catch(err) {
			console.log('\n','----------->err: ', (err))
			throw {
				message: 'Ops! ocorreu um erro ao listar as solicitações!',
				identifier: err.identifier ? err.identifier : 'error while listing requests',
				status: status['FAILED-PROCESS']
			}
		}
	}

	
}

module.exports = Request
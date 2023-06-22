const status = require('../utils/status')

const houseRep = require('../repository/house.rep')
const userRep = require('../repository/user.rep')

class Login {
	constructor(req){
		this.req = req
		this.payload = req.body
		this.user = req.user
		this.houseDB = new houseRep()
		this.userDB = new userRep()
	}

	generateIdentifier() {
		const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
		const numbers = '0123456789'
	
		let identifier = ''
	
		for (let i = 0; i < 4; i++) {
			const randomLetter = letters.charAt(Math.floor(Math.random() * letters.length))
			identifier += randomLetter
		}
	
		for (let i = 0; i < 2; i++) {
			const randomNumber = numbers.charAt(Math.floor(Math.random() * numbers.length))
			identifier += randomNumber
		}
	
		return identifier
	}

	async getGeolocationFromAddress() {
		
	}

	async create() {
		try{
			let identifier = this.generateIdentifier()
			let owner_user_id = this.req.user.id
			let name = this.payload.name
			let isPublic = this.payload.isPublic
			let vacancies = this.payload.vacancies
			let occupied = 1
			let state = this.payload.address.state
			let city = this.payload.address.city
			let neighborhood 	= this.payload.address.neighborhood
			let street = this.payload.address.street
			let number = this.payload.address.number
			
			let result = await this.houseDB.create(identifier, owner_user_id, name, isPublic, vacancies, occupied, state, city, neighborhood, street, number)

			let association = await this.userDB.associate(result.identifier, owner_user_id)

			return { house_code: result.identifier }

		}catch(err){
			console.error(err)

			throw {
				message: 'Ops! ocorreu um erro ao criar a casa!',
				identifier: err.identifier || 'duplicated property',
				status: status['INVALID-DATA']
			}
		}
	}

	async getMyHouse() {
		try{
			let userData = await this.userDB.findById(this.user.id)

			let result = await this.houseDB.searchByIdentifier( userData.house)

			if(!result) throw { identifier: 'house not found' }

			return result

		}catch(err){
			console.error(err)

			throw {
				message: 'Ops! ocorreu um erro ao detalhar a casa!',
				identifier: err.identifier || 'house not found',
				status: status['NOT-FOUND']
			}
		}
	}

}

module.exports = Login
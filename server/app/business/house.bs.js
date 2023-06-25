const status = require('../utils/status')

const houseRep = require('../repository/house.rep')
const userRep = require('../repository/user.rep')

class House {
	constructor(req){
		this.req = req
		this.payload = req.body
		this.query = req.query
		this.params = req.params
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

	async create() {
		try{
			let identifier = this.generateIdentifier()
			let owner_user_id = this.req.user.id
			let name = this.payload.name
			let isPublic = this.payload.isPublic
			let vacancies = this.payload.vacancies
			let occupied = 1
			let state = this.payload.address.state.toUpperCase()
			let city = this.payload.address.city.toUpperCase()
			let neighborhood 	= this.payload.address.neighborhood.toUpperCase()
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

	async getneighborHoodsByCity() {
		try{
			let city = this.query.city ? this.query.city.toUpperCase() : null
			if(!city) throw { identifier: 'city is null' }

			let allHouses = await this.houseDB.findByCity(city)
			if(allHouses.length == 0) throw { identifier: 'city not found'}

			let neighborhoods = allHouses.map(house => house.neighborhood)

			return neighborhoods

		}catch(err){
			console.error(err)

			throw {
				message: 'Ops! ocorreu um erro ao listar as casas!',
				identifier: err.identifier || 'city not found',
				status: status['NOT-FOUND']
			}
		}
	}

	async getHousesByCityAndNeighborhood() {
		try{

			let neighborhood = this.query.neighborhood
			let city = this.query.city

			if(!neighborhood) {
				return await this.houseDB.findByCity(city)
			}

			let houses = await this.houseDB.findByCityAndNeighborhood(city, neighborhood)

			houses = houses.filter(house => house.vacancies - house.occupied > 0)

			return houses

		}catch(err){

			throw {
				message: 'Ops! ocorreu um erro ao listar as casas!',
				identifier: err.identifier || 'house not found',
				status: status['NOT-FOUND']
			}
		}
	}

	async getHousesByCode() {
		try{

			let code = this.params.code

			return await this.houseDB.searchByIdentifier(code)

		}catch(err){

			throw {
				message: 'Ops! ocorreu um erro ao listar as casas!',
				identifier: err.identifier || 'house not found',
				status: status['NOT-FOUND']
			}
		}
	}

	async leave(){
		try{
			let code = this.req.user.house

			let house = await this.houseDB.searchByIdentifier(code)
			await this.houseDB.updateOccupation(code, house.occupied -1)
			await this.userDB.dissociate(this.req.user.id)

		}catch(err){

			throw {
				message: 'Ops! ocorreu um erro ao listar as casas!',
				identifier: err.identifier || 'house not found',
				status: status['NOT-FOUND']
			}
		}
	}

	async listMembers(){
		try{
			let code = this.req.user.house

			let members = await this.userDB.findByHouse(code)

			return members

		}catch(err){

			throw {
				message: 'Ops! ocorreu um erro ao listar as casas!',
				identifier: err.identifier || 'house not found',
				status: status['NOT-FOUND']
			}
		}
	}

	async deleteMember(){
		try{
			let memberId = this.req.params.memberId

			let house = await this.houseDB.searchByIdentifier(this.req.user.house)
			await this.houseDB.updateOccupation(this.req.user.house, house.occupied - 1)

			return await this.userDB.dissociate(memberId)

		}catch(err){

			throw {
				message: 'Ops! ocorreu um erro ao listar as casas!',
				identifier: err.identifier || 'house not found',
				status: status['NOT-FOUND']
			}
		}
	}

}

module.exports = House
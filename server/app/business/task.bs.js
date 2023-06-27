const userRep = require('../repository/user.rep')
const houseRep = require('../repository/house.rep')
const taskRep = require('../repository/task.rep')

const status = require('../utils/status')

class Task {
	constructor(req){
		this.req = req
		this.payload = req.body
		this.userDB = new userRep()
		this.houseDB = new houseRep()
		this.taskDB = new taskRep()
	}

	async create() {
		try{
			let current = this.req.user

			let house_identifier = current.house
			let name = this.payload.name
			let specific = this.payload.specific
			let responsible_user_id = this.payload.responsible_user_id
			let repeat = this.payload.repeat
			let interval = this.payload.interval
			let last_done = null

			return this.taskDB.create(house_identifier, name, specific, responsible_user_id, repeat, interval, last_done)	

		}catch(err) {
			throw {
				message: 'Ops! ocorreu um erro criar tarefa!',
				identifier: err.identifier ? err.identifier : 'error creating task',
				status: status['FAILED-PROCESS']
			}
		}
	}





	
}

module.exports = Task
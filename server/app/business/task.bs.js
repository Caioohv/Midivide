const userRep = require('../repository/user.rep')
const houseRep = require('../repository/house.rep')
const taskRep = require('../repository/task.rep')

const status = require('../utils/status')

const moment = require('moment')

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

	async listHouseTasks() {
		try{
			let current = this.req.user

			let tasks = await this.taskDB.searchByHouse(current.house)	

			let userIds = tasks.map(task => task.responsible_user_id)

			let users = await this.userDB.findByIds(userIds)

			tasks.map(task => {
				task.responsible = users.find(user => user.id === task.responsible_user_id)
				delete task.responsible_user_id
			})

			return tasks

		}catch(err) {
			throw {
				message: 'Ops! ocorreu um erro listar as tarefas da casa '+this.req.user.house,
				identifier: err.identifier ? err.identifier : 'error listing tasks',
				status: status['FAILED-PROCESS']
			}
		}
	}

	async listMyTasks() {
		try{
			let current = this.req.user

			let tasks = await this.taskDB.searchByUserId(current.id)	

			tasks.map(task => {
				if(task.last_done && task.repeat){
					
					let difference

					if(task.interval == 'day'){
						difference = moment().diff(moment(task.last_done), 'days')
					} 
					if(task.interval == 'week'){
						difference = moment().diff(moment(task.last_done), 'weeks')
					} 
					if(task.interval == 'month'){
						difference = moment().diff(moment(task.last_done), 'months')
					} 

					if(difference == 0)
						task.done = true
					else 
						task.done = false

				}
			})



			return tasks

		}catch(err) {
			throw {
				message: 'Ops! ocorreu um erro listar as tarefas da casa '+this.req.user.house,
				identifier: err.identifier ? err.identifier : 'error listing tasks',
				status: status['FAILED-PROCESS']
			}
		}
	}



	
}

module.exports = Task
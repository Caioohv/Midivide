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

	checkIfTasksAreDone(tasks) {
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
			} else task.done = false

			return task
		})

		return tasks
	}
	
	associateTasksWithUser(tasks, users) {
		tasks.map(task => {
			task.responsible = users.find(user => user.id === task.responsible_user_id)
			delete task.responsible_user_id
		})
		
		return tasks
	}
	
	associateUserWithTasks(users, tasks) {
		users.map(user => {
			user.tasks = []
			user.tasks = tasks.filter(task => user.id === task.responsible_user_id)
		})
		
		return users
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

			tasks = this.checkIfTasksAreDone(tasks)

			return this.associateTasksWithUser(tasks, users)

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

			tasks = this.checkIfTasksAreDone(tasks)

			let response = {
				done: [],
				pending: []
			}

			tasks.forEach(task => {
				if(task.done) response.done.push(task)
				else response.pending.push(task)
			})

			return response

		}catch(err) {
			throw {
				message: 'Ops! ocorreu um erro listar as tarefas da casa '+this.req.user.house,
				identifier: err.identifier ? err.identifier : 'error listing tasks',
				status: status['FAILED-PROCESS']
			}
		}
	}

	async allocateTasks() {
		try{
			let current = this.req.user

			let users = await this.userDB.findByHouse(current.house)
			let tasks = await this.taskDB.searchByHouse(current.house)

			users = this.associateUserWithTasks(users, tasks)

			let notSpecificTasks = tasks.map(task => {if (task.specific == false) return task}) 

			users.sort((a, b) => a.tasks.length - b.tasks.length)

			for (const task of notSpecificTasks) {
				await users[0].tasks.push(task)
				await this.taskDB.associate(task.id, users[0].id)
				users.sort((a, b) => a.tasks.length - b.tasks.length)
			}

			return notSpecificTasks

		}catch(err) {
			throw {
				message: 'Ops! ocorreu um erro listar as tarefas da casa '+this.req.user.house,
				identifier: err.identifier ? err.identifier : 'error listing tasks',
				status: status['FAILED-PROCESS']
			}
		}
	}

	async markAsDone() {
		let taskId = this.req.params.task_id

		try{
			let task = await this.taskDB.searchById(taskId)

			task.last_done = moment()
			
			return await this.taskDB.markAsDone(task.id, task.last_done)

		}catch(err) {
			throw {
				message: 'Ops! ocorreu um erro ao concluir tarefa',
				identifier: err.identifier ? err.identifier : 'error concluding task',
				status: status['FAILED-PROCESS']
			}
		}
	}

	async delete(){
		let taskId = this.req.params.task_id

		try{
			let task = await this.taskDB.delete(taskId)

			return task			

		}catch(err) {
			throw {
				message: 'Ops! ocorreu um erro ao deletar tarefa',
				identifier: err.identifier ? err.identifier : 'error concluding task',
				status: status['FAILED-PROCESS']
			}
		}
	}
	
}

module.exports = Task
const TaskBs = require('../business/task.bs')
const error = require('../utils/error-handler')
const status = require('../utils/status')

class Task {

	async create(req, res) {
		const task = new TaskBs(req, res)

		try{
			let response = await task.create()
			res.status(status['SUCCESS']).json(response)

		}catch(err){
			error(err, res)
			
		}
	}

	async listHouseTasks(req, res) {
		const task = new TaskBs(req, res)

		try{
			let response = await task.listHouseTasks()
			res.status(status['SUCCESS']).json(response)

		}catch(err){
			error(err, res)
			
		}
	}

	async listMyTasks(req, res) {
		const task = new TaskBs(req, res)

		try{
			let response = await task.listMyTasks()
			res.status(status['SUCCESS']).json(response)

		}catch(err){
			error(err, res)
			
		}
	}

	async allocateTasks(req, res) {
		const task = new TaskBs(req, res)

		try{
			let response = await task.allocateTasks()
			res.status(status['SUCCESS']).json(response)

		}catch(err){
			error(err, res)
			
		}
	}

}

module.exports = Task
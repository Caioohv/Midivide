console.log('Loading private routes')
const authCtrl = require('../controllers/auth.ctrl')
const userCtrl = require('../controllers/user.ctrl')
const houseCtrl = require('../controllers/house.ctrl')
const requestCtrl = require('../controllers/request.ctrl')
const taskCtrl = require('../controllers/task.ctrl')
const billsCtrl = require('../controllers/bills.ctrl')

const authorize = require('../middlewares/auth')
const admin = require('../middlewares/admin')

const auth = new authCtrl()
const user = new userCtrl()
const house = new houseCtrl()
const request = new requestCtrl()
const task = new taskCtrl()
const bills = new billsCtrl()

module.exports = (app) => {

	app.route('/auth/register/start')
		.post(
			auth.startRegister
		)

	app.route('/auth/register/confirm')
		.post(
			auth.confirmSecondFactor
		)

	app.route('/auth/login')
		.post(
			auth.login
		)

	app.route('/user')
		.get(
			authorize,
			user.detail
		)

	app.route('/houses/neighborhoods')
		.get(
			authorize,
			house.getneighborHoodsByCity
		)

	app.route('/houses')
		.get(
			authorize,
			house.getHousesByCityAndNeighborhood
		)

	app.route('/houses/:code')
		.get(
			authorize,
			house.getHousesByCode
		)

	app.route('/house')
		.get(
			authorize,
			house.getMyHouse
		)
		.post(
			authorize,
			house.create
		)
		.delete(
			authorize,
			house.leave
		)


	app.route('/house/request')
		.post(
			authorize,
			request.create
		)
		.get(
			authorize,
			admin, 
			request.listByHouse
		)

	app.route('/my-request')
		.get(
			authorize,
			request.listMyRequest
		)
		.delete(
			authorize,
			request.cancelRequest
		)

	app.route('/house/request/:request_id/:decision')
		.put(
			authorize,
			request.acceptOrDecline
		)

	app.route('/house/members')
		.get(
			authorize,
			house.listMembers
		)

	app.route('/house/members/:memberId')
		.delete(
			authorize,
			house.deleteMember
		)

	app.route('/tasks/all')
		.get(
			authorize,
			task.listHouseTasks
		)

	app.route('/tasks/allocate')
		.post(
			authorize,
			admin,
			task.allocateTasks
		)

	app.route('/tasks/:task_id/done')
		.put(
			authorize,
			task.markAsDone
		)

	app.route('/tasks/:task_id')
		.delete(
			authorize,
			admin,
			task.delete
		)

	app.route('/tasks')
		.get(
			authorize, 
			task.listMyTasks
		)
		.post(
			authorize,
			task.create
		)

	app.route('/bills')
		.post(
			authorize,
			bills.create
		)

	console.log('Private routes ok')
} 
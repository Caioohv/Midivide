console.log('Loading private routes')
const authCtrl = require('../controllers/auth.ctrl')
const userCtrl = require('../controllers/user.ctrl')
const houseCtrl = require('../controllers/house.ctrl')
const requestCtrl = require('../controllers/request.ctrl')

const authorize = require('../middlewares/auth')
const admin = require('../middlewares/admin')

const auth = new authCtrl()
const user = new userCtrl()
const house = new houseCtrl()
const request = new requestCtrl()

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

	app.route('/house')
		.get(
			authorize,
			house.getMyHouse
		)
		.post(
			authorize,
			house.create
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

	app.route('/house/request/:request_id/:decision')
		.put(
			authorize,
			request.acceptOrDecline
		)

	console.log('Private routes ok')
} 
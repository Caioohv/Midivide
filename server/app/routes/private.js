console.log('Loading private routes')
const authCtrl = require('../controllers/auth.ctrl')
const userCtrl = require('../controllers/user.ctrl')

const authorize = require('../middlewares/auth')

const auth = new authCtrl()
const user = new userCtrl()

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

	console.log('Private routes ok')
} 
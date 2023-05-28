console.log('Loading private routes')
const authCtrl = require('../controllers/auth.ctrl')

const auth = new authCtrl()

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

	console.log('Private routes ok')
} 
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

	console.log('Private routes ok')
} 
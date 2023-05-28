console.log('Loading public routes')
const authCtrl = require('../controllers/auth.ctrl')

const auth = new authCtrl()

module.exports = (app) => {

	app.get('/healthcheck', (req, res) => {
		res.status(200).json('Ok!')
	})

	console.log('Public routes ok')
} 
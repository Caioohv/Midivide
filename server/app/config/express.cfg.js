const morgan = require('morgan')
const bodyParser = require('body-parser')

const privateRoutes = require('../routes/private')


module.exports = (app) => {
	app.set('view cache', false)
	app.use(bodyParser.json({limit: '20mb'}))
	app.use(bodyParser.urlencoded({extended: true}))

	privateRoutes(app)


}
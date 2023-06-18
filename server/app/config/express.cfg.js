const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const privateRoutes = require('../routes/private')
const publicRoutes = require('../routes/public')

morgan.token('statusColor', (req, res, args) => {
	var status = (typeof res.headersSent !== 'boolean' ? Boolean(res.header) : res.headersSent)
		? res.statusCode
		: undefined

	var color = status >= 500 ? 31 // red
		: status >= 400 ? 33 // yellow
			: status >= 300 ? 36 // cyan
				: status >= 200 ? 32 // green
					: 0 // no color

	return '\x1b[' + color + 'm' + status + '\x1b[0m'
})

module.exports = (app) => {

	console.log('Booting Server...')

	app.set('view cache', false)
	app.use(bodyParser.json({limit: '20mb'}))
	app.use(bodyParser.urlencoded({extended: true}))

	app.use(morgan('\x1b[33m:method\x1b[0m \x1b[36m:url\x1b[0m :statusColor :response-time ms'))

	app.use(cors())

	console.log('Server ok')

	privateRoutes(app)
	publicRoutes(app)

}
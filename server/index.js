const express = require('express')
const configExpress = require('./app/config/express.cfg')
const config = require('./app/config/general.cfg')

const app = express()

configExpress(app)

app.listen(config().app.port)
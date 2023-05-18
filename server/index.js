const express = require('express')
const configExpress = require('./app/config/express')
const config = require('./app/config/general')

const app = express()

configExpress(app)

app.listen(config().app.port)
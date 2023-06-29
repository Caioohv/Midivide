require('./app/database/connect')

const express = require('express')
const nodemailer = require('nodemailer')

const configExpress = require('./app/config/express.cfg')
const appConfig = require('./app/config/general.cfg')
const emailConfig = require('./app/config/email.cfg')


const transporter = nodemailer.createTransport(emailConfig)

transporter
  .verify(console.log('Email service: running'))
  .catch(console.log)

const app = express()

configExpress(app)

app.listen(appConfig.app.port, () => {
  console.log('Listening on port ' + appConfig.app.port)
})

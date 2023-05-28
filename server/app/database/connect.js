const Sequelize = require('sequelize')
const config = require('../config/database.cfg')

const User = require('./models/User')
const Auth = require('./models/Auth')
const EmailCodes = require('./models/Email-code')
const AuthTokens = require('./models/Auth-token')

const db = new Sequelize(config)

User.init(db)
Auth.init(db)
EmailCodes.init(db)
AuthTokens.init(db)

module.exports = db
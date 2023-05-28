const Sequelize = require('sequelize')
const config = require('../config/database.cfg')

const User = require('./models/User')
const Auth = require('./models/Auth')
const EmailCode = require('./models/Email-code')

const db = new Sequelize(config)

User.init(db)
Auth.init(db)
EmailCode.init(db)

module.exports = db
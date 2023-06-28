const Sequelize = require('sequelize')
const config = require('../config/database.cfg')

const User = require('./models/User')
const Auth = require('./models/Auth')
const EmailCodes = require('./models/Email-code')
const AuthTokens = require('./models/Auth-token')
const Houses = require('./models/House')
const Requests = require('./models/Request')
const Tasks = require('./models/Task')
const Bills = require('./models/Bill')
const Debts = require('./models/Debt')

const db = new Sequelize(config)

User.init(db)
Auth.init(db)
EmailCodes.init(db)
AuthTokens.init(db)
Houses.init(db)
Requests.init(db)
Tasks.init(db)
Bills.init(db)
Debts.init(db)

module.exports = db
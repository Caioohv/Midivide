const Sequelize = require('sequelize')
const config = require('../config/database.cfg')

const db = new Sequelize(config())

module.exports = db
const bcrypt = require('bcrypt')
const moment = require('moment')

const userRep = require('../repository/user.rep')
const authRep = require('../repository/auth.rep')
const emailCodeRep = require('../repository/email-code.rep')

const mailer = require('../mailer/send-message')

const status = require('../utils/status')

class Register {
	constructor(req){
		this.req = req
		this.payload = req.body
		this.userDB = new userRep()
		this.authDB = new authRep()
		this.emailCodeDB = new emailCodeRep()
	}

	generateSecondFactor(){
		return Math.floor(100000 + Math.random() * 900000)
	}

	defineExpirationTime(){
		return moment(moment.now()).add(15, 'minutes')
	}

	async sendSecondFactorEmail(email, code){
		let subject = 'Verifique sua conta no Midivide'

		let content = '<h1> Seu código de ativação:</h1>'
		content += '<p>'+code+'</p>'

		mailer(email, subject, content)
	}

	async verifyRegistration(email) {
		let user = await this.userDB.findByEmail(email)
		return user ? true : false

	}

	async start() {
		try{
			let email = this.payload.email
			let name = this.payload.name
			let password = this.payload.password

			if(await this.verifyRegistration(email)){
				throw {
					identifier: 'email-already-registered'
				}
			}

			const salt = await bcrypt.genSalt()
			const hashedPassword = await bcrypt.hash(password, salt)
			const code = this.generateSecondFactor()

			let user = 
			await this.userDB.register(email, name, false)
			await this.authDB.register(user.id, hashedPassword)
			await this.emailCodeDB.register(user.id, code, this.defineExpirationTime())
			await this.sendSecondFactorEmail(email, code)

		}catch(err){
			console.error(err)

			throw {
				message: 'Ops! ocorreu um erro ao criar a sua conta!',
				identifier: err.identifier,
				status: status['INVALID-DATA']
			}
		}
	}





}

module.exports = Register
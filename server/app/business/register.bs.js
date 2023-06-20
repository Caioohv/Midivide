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
		this.keys = req.headers
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
	
	isCodeValid(expiration){
		return moment(moment.now()).diff(expiration) <= 0
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
					identifier: 'email already registered'
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

	async confirmSecondFactor(){
		try{
			let finished = false

			let theirCode = this.payload.code
			let email = this.keys['x-registration-target']
			
			let user = await this.userDB.findByEmail(email)
			let ourCode = await this.emailCodeDB.findByUserId(user.id)

			if(this.isCodeValid(ourCode.expiration)){
				if(ourCode.factor == theirCode){
					await this.userDB.activate(user.id)
					await this.emailCodeDB.clear(user.id)
					finished = true
				}
			}

			if(!finished) {
				const code = this.generateSecondFactor()
				await this.emailCodeDB.resend(user.id, code, this.defineExpirationTime())
				await this.sendSecondFactorEmail(email, code)

				throw {identifier: 'resend second factor'}
			}

		}catch(err){
			if(err.identifier == 'resend-second-factor'){
				throw {
					message: 'Um novo código foi enviado para o seu email.',
					identifier: err.identifier,
					status: status['INVALID-DATA']
				}
			}

			throw {
				message: 'Ops! ocorreu um erro ao validar a sua conta.',
				identifier: err.identifier,
				status: status['INVALID-DATA']
			}
				
		}
	}




}

module.exports = Register
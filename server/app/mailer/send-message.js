const nodemailer = require('nodemailer')

const emailConfig = require('../config/email.cfg')

module.exports = (email, subject, content) => {
	let message = {
		from: 'from@email.com',
		to: email,
		subject: subject,
		html: content
	}

	const transporter = nodemailer.createTransport(emailConfig)
	
	transporter
		.sendMail(message)
		.catch(console.log)
}


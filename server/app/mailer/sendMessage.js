const nodemailer = require('nodemailer')

const emailConfig = require('./app/config/email.cfg')

module.exports = (subject, content) => {
	let message = {
		from: 'from@email.com',
		to: 'to@email.com',
		subject: subject,
		html: content
	}

	const transporter = nodemailer.createTransport(emailConfig)
	
	transporter
		.verify(console.log('Email service: running'))
		.catch(console.log)
}


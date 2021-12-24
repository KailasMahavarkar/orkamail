const nodemailer = require("nodemailer");
const MAIL_USER = process.env.SMTP_AUTH_USERNAME;

const sendMail = async (req, res) => {
	const { email, subject } = req.body;
	const html = req.html;

	let transporter = nodemailer.createTransport({
		service: process.env.SMTP_SERVICE,
		host: process.env.HOST,
		port: process.env.PORT,
		auth: {
			user: MAIL_USER,
			pass: process.env.SMTP_AUTH_PASSWORD,
		},
	});

	try {
		await transporter.sendMail({
			from: `${req.body.sender} <${MAIL_USER}>`, // sender address
			to: email, // list of receivers
			subject: subject, // Subject line
			text: "not supported", // plain text body
			html: html, // html body
		});

		return res.status(200).json({
			msg: "Mail has been sent",
			success: "success",
			email: email,
		});
	} catch (error) {
        console.log(error);
		return res.status(500).json({
			msg: "Error sending mail",
			error: error,
		});
	}
};

module.exports = sendMail;

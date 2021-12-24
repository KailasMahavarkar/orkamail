const { isEmpty } = require("../helper");

const NullMiddleware = (req, res, next) => {
	const sample = {
		email: "john@gmail.com",
		subject: "Mail from John",
		sender: "JohnWick",
		template: "verify",
		plaintext: "plain_text",
		config: {
			company: "JohnWick Company",
			href: "https://shorturl.at/rsJQ8",
		},
	};

	// expected body
	const expected = {
		email: {
			type: "string",
			value: req.body.email,
		},
		subject: {
			type: "string",
			value: req.body.subject,
		},
		sender: {
			type: "string",
			value: req.body.sender,
		},
		template: {
			type: "string",
			value: req.body.template,
		},
		plaintext: {
			type: "string",
			value: req.body.plaintext,
		},
		config: {
			type: "object",
			value: req.body.config,
		},
	};

	const receivedKeys = Object.keys(req.body);
	const expectedKeys = Object.keys(expected);

	for (let x of expectedKeys) {
		if (!receivedKeys.includes(x)) {
			return res.status(400).json({
				msg: `${x} is required`,
				success: "failed",
				sample: sample,
			});
		}
        

		if (typeof expected[x].value !== expected[x].type) {
			return res.status(400).json({
				msg: `${x} is not a ${expected[x].type}`,
				success: "failed",
				sample: sample,
			});
		}
	}

	return next();
};

module.exports = NullMiddleware;

const _schemaCheck = (req, res, next) => {
	const schema = req.schema;
	const data = req.body.config;

	const schemaKeys = Object.keys(schema);
	const dataKeys = Object.keys(data);

	for (let x of schemaKeys) {
		if (!dataKeys.includes(x)) {
			return res.status(400).json({
				msg: `${x} is missing in config`,
				expected: {
					config: {
						[x]: schema[x].type,
					},
				},
			});
		}

		if (typeof data[x] !== schema[x].type) {
			return res.status(400).json({
				name: x,
				type: typeof data[x],
				expected: schema[x].type,
			});
		}
	}

	req.html = req.template({
		...data,
	});


	return next();
};

module.exports = _schemaCheck;

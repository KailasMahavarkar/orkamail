const path = require("path");
const templateDirectory = path.join(__dirname, "..", "templates");
const fs = require("fs");

const lookup = (templateName) => {
	// nodejs check file in directory4
	const filePath = path.join(templateDirectory, templateName);

	// check if file exists
	if (fs.existsSync(filePath)) {
		// return file path
		return filePath;
	}
	return false;
};

const _setTemplate = (req, res, next) => {
	try {
		let templateName = req.body.template.name.replace(".template.js", "");
		templateName = templateName + ".template.js";

		// check if template exists
		const lookup_result = lookup(templateName);

		const { schema, template } = require(lookup_result);

		req.schema = schema;
		req.template = template;

		return next();
	} catch (error) {
		const { schema, template } = require(path.join(
			templateDirectory,
			"verify.template.js"
		));

		req.schema = schema;
		req.template = template;

		return next();
	}
};

module.exports = _setTemplate;

const AuthMiddleware = (req, res, next) => {
	// authenicate apikey
	const apiKey = req.headers["x-api-key"];

	// apikey is not in api header
	if (!apiKey) {
		return res.status(401).json({
			msg: "No api key provided",
		});
	}

	// failsafe -> if api key is not set in env
	if (apiKey !== process.env.MAIL_API_KEY) {
		return res.status(401).json({
			msg: "Invalid api key",
		});
	}
	return next();
};

module.exports = AuthMiddleware;

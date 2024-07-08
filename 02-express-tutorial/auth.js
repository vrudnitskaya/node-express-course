const authorize = (req, res, next) => {
	const { name } = req.cookies;
	if (!name) {
		return res.status(401).json('unauthorized');
	}
	req.user = name;
	next();
};

module.exports = authorize;
// router
const router = require("express").Router();

// importing middlewares
const _auth = require("../middlewares/_auth.apikey");
const _null = require("../middlewares/_null.check");
const _set = require("../middlewares/_set.template");
const _schema = require("../middlewares/_schema.check");

// importing controller
const sendMail = require("../components/sendmail");

// single route to send mail to clients
router.post("/", _auth, _null, _set, _schema, sendMail);

module.exports = router;

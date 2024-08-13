const express = require('express');
const router = express.Router();
const { logon, hello } = require('../controllers/main');
const authenticationMiddleware = require('../middleware/auth');

router.route('/hello').get(authenticationMiddleware, hello);
router.route('/logon').post(logon);

module.exports = router;
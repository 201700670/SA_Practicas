const express = require('express'),
router = express.Router();
const login = require('../controllers/service.controller')
require('dotenv').config();
router.route('/').get(login.index)
router.route('/login').post(login.login)
module.exports = router;
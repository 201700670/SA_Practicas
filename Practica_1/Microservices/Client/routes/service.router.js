const express = require('express'),
router = express.Router();
const cliente = require('../controllers/service.controller')
require('dotenv').config();
router.route('/').get(cliente.index)
router.route('/client/order').post(cliente.pedido)
router.route('/client/order').get(cliente.getpedido)
module.exports = router;
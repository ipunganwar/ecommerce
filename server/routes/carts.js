const router = require('express').Router()
const cartController = require('../controllers/carts')

router.post('/checkout', cartController.checkout)

module.exports = router
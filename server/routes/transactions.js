const router = require('express').Router()
const transactionController = require('../controllers/transactions')

router.post('/checkout', transactionController.checkout)
router.get('/get', transactionController.cek_transaksi)

module.exports = router
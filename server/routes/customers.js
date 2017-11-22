const router = require('express').Router()
const custController = require('../controllers/customers')

router.post('/login', custController.login)
router.post('/register', custController.register)

module.exports = router
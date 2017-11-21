const router = require('express').Router()
const itemsController = require('../controllers/items')

router.post('/add', itemsController.add)
router.get('/list', itemsController.list)
router.post('/addCart', itemsController.add_to_cart)
router.delete('/destroy/:id', itemsController.add_to_cart)


module.exports = router
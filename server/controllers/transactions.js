const Transactions = require('../models/transactions')
const Items = require('../models/item')

const add_to_cart = (req, res) => {
	Items.find({name : req.body.name})
	.then(result => { res.status(200).json(result)} )
	.catch(err => { res.status(500).json(result)} )
}

module.exports = {
	add_to_cart
}
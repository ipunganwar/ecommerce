const Transactions = require('../models/transaction')

const checkout = (req, res) => {
	let id_cart = req.body.cart.map(cart => {
		return cart.id
	}),
	obj = {
		itemslist : id_cart,
		total : req.body.total_harga
	}

	Transactions.create(obj)
	.then(result => {
		console.log(result)
		res.status(201).json(result)
	})
}

const cek_transaksi = (req, res) => {
	Transactions.find()
	.populate('itemslist')
	.exec((err, story) => {
		res.json(story)
	})
}


module.exports = {
	checkout,
	cek_transaksi
}
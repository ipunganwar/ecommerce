const Carts = require('../models/cart')

const checkout = (req, res) => {
	Carts.create(
	{
		nama_barang : req.body.nama_barang,
		jumlah : req.body.jumlah,
		price : req.body.price,
		subtotal : req.body.subtotal
	})
	.then(result => { res.status(201).json(result) })

}



module.exports = {
	checkout
}
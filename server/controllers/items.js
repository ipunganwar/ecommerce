'use strict'
const Items = require('../models/item')
let cart = []

const add = (req, res) => {
	console.log(req.body)
	// Items.create(
	// {
	// 	name : req.body.name,
	// 	quantity : req.body.quantity,
	// 	price : req.body.price,
	// 	category : req.body.category
	// })
	// .then(result => { res.status(201).json(result)})
}

const list = (req, res) => {
	Items.find()
	.then(result => { res.status(200).json(result)} )
	.catch(err => res.status(500).json(err))
}

const add_to_cart = (req, res) => {
	let item = []
		
	item.push(req.body.id)
	cart.push(req.body.id)
	console.log(cart.length)


}

const destroy = (req, res) => {
	Items.findOneAndRemove({id : req.params.id})
	.then(result => {res.send('oke')})
}

module.exports = {
	add,
	list,
	add_to_cart
}
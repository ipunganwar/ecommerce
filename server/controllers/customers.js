const Customers = require('../models/customer')
const jwt = require('../helpers/jwt')

const login = (req, res) => {
	Customers.find(req.body.username)
	.then(result => {
		
		jwt.sign(result).then(hash => {
			res.status(201).json(hash)
		})
		
	})
	.catch(error => {
		res.status(500).json(error)
	})
}

const register = (req, res) => {
	Customers.create(req.body)
	.then(result => {
		res.status(201).json(result)
	})
	.catch(error => {
		res.status(500).json(error)
	})
}

module.exports = {
	login,
	register
}
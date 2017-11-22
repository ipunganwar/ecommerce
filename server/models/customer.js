const mongoose = require('mongoose').connect('mongodb://localhost/ecommerce');
const Schema = mongoose.Schema

const customerSchema = new Schema({
    name: String,
    password : String,
    email : String
});

const Customers = mongoose.model('Customers', customerSchema)

module.exports = Customers
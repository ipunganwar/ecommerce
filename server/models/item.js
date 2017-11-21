const mongoose = require('mongoose').connect('mongodb://localhost/ecommerce');
const Schema = mongoose.Schema

const itemSchema = new Schema({
    name: String,
    quantity : Number,
    price : Number,
    category : String
});

const Items = mongoose.model('Items', itemSchema)

module.exports = Items
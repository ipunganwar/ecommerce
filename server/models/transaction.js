const mongoose = require('mongoose').connect('mongodb://localhost/ecommerce');
const Schema = mongoose.Schema

const transactionSchema = new Schema({
	member : {type: Schema.Types.ObjectId, ref: 'Customers'},
    booklist : [{
    	itemDetail : {type: Schema.Types.ObjectId, ref: 'Books'},
    	itemAmount : Number,
    	subtotal : Number
    }],
    total : Number
});

const Transactions = mongoose.model('Transactions', transactionSchema)

module.exports = Transactions
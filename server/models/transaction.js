const mongoose = require('mongoose').connect('mongodb://localhost/ecommerce');
// .connect('mongodb://mongodb:mongodb@cluster0-shard-00-00-47t4k.mongodb.net:27017,cluster0-shard-00-01-47t4k.mongodb.net:27017,cluster0-shard-00-02-47t4k.mongodb.net:27017/mongodb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');
const Schema = mongoose.Schema

const transactionSchema = new Schema({
	// member : {type: Schema.Types.ObjectId, ref: 'Customers'},
    itemslist : [{type: Schema.Types.ObjectId, ref: 'Items'}],
    total : Number
});

const Transactions = mongoose.model('Transactions', transactionSchema)

module.exports = Transactions
const mongoose = require('mongoose').connect('mongodb://localhost/ecommerce');
const Schema = mongoose.Schema

const cartSchema = new Schema({
    nama_barang: String,
    jumlah : Number,
    price : Number,
    subtotal : Number,

});

const Carts = mongoose.model('Carts', cartSchema)

module.exports = Carts
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    image: {
        data: Buffer,
        contentType: String,
    },
    name: String,
    category: String,
})

module.exports = mongoose.model('Product', productSchema);
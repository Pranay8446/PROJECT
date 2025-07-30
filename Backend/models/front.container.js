const mongoose = require('mongoose');

const frontContainerSchema =  mongoose.Schema({
    name: {
        type: String,   
        required: true
    },
    image: {
        data: Buffer,
        contentType: String,
    },
    link: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('FrontContainer', frontContainerSchema);
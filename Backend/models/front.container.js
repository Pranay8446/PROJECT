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
})


module.exports = mongoose.model('FrontContainer', frontContainerSchema);
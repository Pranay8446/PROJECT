const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 10000,
        socketTimeoutMS: 45000,
    })
    .then(() => {
        console.log('✅ Connected to DB');
    })
    .catch((err) => {
        console.error('❌ MongoDB connection error:', err.message);
    });
}

module.exports = connectToDb;

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASS,
    // dbName: 'GSM',
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

module.exports = {
    GSM: require('../models/GSM'),
    Fiber: require('../models/Fiber'),
};
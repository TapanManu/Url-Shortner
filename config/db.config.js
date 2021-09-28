const mongoose = require('mongoose');

const pwd = 'YOUR_APP_PASSWORD_HERE';
const DB_URI = 'mongodb+srv://TapanManu:'+pwd+'@cluster0.bv9c1.mongodb.net/url-shortner?retryWrites=true&w=majority';

mongoose.connect(DB_URI,{
    useNewUrlParser : true,
    useUnifiedTopology : true
});

const connection = mongoose.connection;

module.exports = connection;
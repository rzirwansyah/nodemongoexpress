const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route');

const app = express();

// koneksi ke mongoDB
const mongoose = require('mongoose');

let dev_db_url = 'mongodb://rzirwansyah:Apple4njing!@ds151994.mlab.com:51994/nme';
let mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// penggunaan bodyParser di middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// setting port dan routing awal
app.use('/products', product);

let port = 1234;

app.listen(port, () => {
    console.log('Server siap digunakan dan bekerja di port nomor ' + port)
});
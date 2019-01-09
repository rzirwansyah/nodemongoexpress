const Product = require('../models/product.model');

exports.test = function (req, res) {
    res.send('Cek kontroler tes')
};

exports.productCreate = function (req, res, next) {
    let product = new Product({
        name: req.body.name,
        price: req.body.price
    });
    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Produk berhasil direkam')
    })
};

exports.productDetails = function (req, res, next) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.productUpdate = function (req, res, next) {
    Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
        if (err) return next(err);
        res.send('Produk ' + product.name + ' dengah harga ' + product.price + ' berhasil diperbaharui');
    })
};

exports.productDelete = function (req, res, next) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Produk berhasil dihapus');
    })
};
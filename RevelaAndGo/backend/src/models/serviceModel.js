const { Schema, model } = require('mongoose');

const serviceModel = new Schema({
  filmType: Number,
  palette: String,
  scan: Boolean,
  print: Boolean,
  rollBack: Boolean,
  price: Number
});

module.exports = model('Service', serviceModel);

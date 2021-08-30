const { Schema, model } = require('mongoose');

const serviceModel = new Schema({
  filmType: Number,
  palette: String,
  scan: Boolean,
  printed: Boolean,
  rollBack: Boolean
});

module.exports = model('Service', serviceModel);

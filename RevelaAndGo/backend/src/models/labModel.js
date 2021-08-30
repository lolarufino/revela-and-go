const { Schema, model } = require('mongoose');

const labSchema = new Schema({
  name: String,
  address: String,
  contact: Number,
  image: { type: String, default: 'https://i.ibb.co/QQM3QTz/nophotoavailablelab.png' },
  services: [Schema.Types.Mixed],
  baseRate: Number
});

module.exports = model('Lab', labSchema);

const { Schema, model } = require('mongoose');

const labSchema = new Schema({
  name: String,
  address: String,
  contact: Number,
  image: { type: String, default: 'https://i.ibb.co/3pN6HCG/pexels-cottonbro-3585011.jpg' },
  services: [Schema.Types.Mixed],
  baseRate: Number
});

module.exports = model('Lab', labSchema);

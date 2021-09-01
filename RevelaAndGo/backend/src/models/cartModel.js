const { Schema, model } = require('mongoose');

const cartSchema = new Schema({
  services: [{ type: Schema.Types.ObjectId, ref: 'Service' }]
});

module.exports = model('Cart', cartSchema);

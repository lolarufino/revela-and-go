const { Schema, model } = require('mongoose');

const cartSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  services: [{ type: Schema.Types.ObjectId, ref: 'Service' }]
});

module.exports = model('Cart', cartSchema);

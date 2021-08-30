const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  profilePicture: { type: String, default: 'https://i.ibb.co/3pN6HCG/pexels-cottonbro-3585011.jpg' },
  favoriteLabs: [{ type: Schema.Types.ObjectId, ref: 'Lab' }]
});

module.exports = model('User', userSchema);

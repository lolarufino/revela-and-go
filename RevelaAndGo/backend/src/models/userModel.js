const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  profilePicture: { type: String, default: 'https://i.ibb.co/5v7x2jW/nophotoavailable.png' },
  favoriteLabs: [{ type: Schema.Types.ObjectId, ref: 'Lab' }]
});

userSchema.methods.isValidPassword = function isValidPassword(password) {
  return password === this.password;
};

module.exports = model('User', userSchema);

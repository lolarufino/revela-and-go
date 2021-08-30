const cartSchema = new Schema({
  userId: String,
  services: [{ type: Schema.Types.ObjectId, ref: 'Service' }]
});

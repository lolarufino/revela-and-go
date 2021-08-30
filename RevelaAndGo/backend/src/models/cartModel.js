const cartSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  contractedService: { type: Schema.Types.ObjectId, ref: 'ContractedService' }
});

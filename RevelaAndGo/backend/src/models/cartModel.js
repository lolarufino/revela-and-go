const cartSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    lab: { type: Schema.Types.ObjectId, ref: 'Lab' },
    contractedServices: [Schema.Types.Mixed],
});
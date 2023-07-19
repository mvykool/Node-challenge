import { Schema, model } from 'mongoose';

const UserPriceSchema = new Schema({
    userId: String,
    brand: String,
    specialPrice: Number,
});

export default model('UserPrice', UserPriceSchema);
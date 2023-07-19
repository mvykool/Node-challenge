import { Schema, model } from 'mongoose';

const ProductSchema = new Schema({
    name: String,
    brand: String,
    price: Number,
    inStock: Boolean,
});

export default model('Product', ProductSchema);
import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    nombre: String,
    precio_base: Number,
    existencia: Number,
});

export default mongoose.model('Product', ProductSchema, 'products');
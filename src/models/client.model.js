import mongoose from 'mongoose';

const SpecialPriceSchema = new mongoose.Schema({
    nombre_producto: String,
    precio_especial_personal: Number,
});

const ClientSchema = new mongoose.Schema({
    id: Number,
    nombre: String,
    metadata: Object,
    precios_especiales: [SpecialPriceSchema],
});

export default mongoose.model('Client', ClientSchema, 'users');
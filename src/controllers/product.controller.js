import Product from '../models/product.model.js';

export async function getInStockProducts(req, res) {
    try {
        const products = await Product.find({ enStock: true });
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
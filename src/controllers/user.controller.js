import User from '../models/user.model.js';
import Product from '../models/product.model.js';

export async function getProductPrice(req, res) {
    try {
        const userId = req.params.userId;
        const productName = req.params.productName;

        const user = await User.findById(userId);
        const product = await Product.findOne({ nombre: productName });

        const specialPrice = user.specialPricing.find(sp => sp.brandId.toString() === product.id_marca.toString());

        if (specialPrice) {
            res.status(200).json({ specialPrice: specialPrice.price });
        } else {
            res.status(200).json({ basePrice: product.precioBase });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
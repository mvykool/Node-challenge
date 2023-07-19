import Client from '../models/client.model.js';
import Product from '../models/product.model.js';

export async function getProductPrice(req, res) {
    try {
        const userId = req.params.user_id;
        const productName = req.params.nombre_producto;

        const client = await Client.findOne({ id: userId });
        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }

        const product = await Product.findOne({ nombre: productName });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        let specialPriceEntry;
        if (client.metadata && client.metadata.precios_especiales) {
            specialPriceEntry = client.metadata.precios_especiales.find((sp) => sp.nombre_producto === productName);
        }

        if (specialPriceEntry) {
            return res.status(200).json({ specialPrice: specialPriceEntry.precio_especial_personal });
        } else {
            return res.status(200).json({ basePrice: product.precio_base });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}
import "dotenv/config.js"
import express from 'express';
import cors from 'cors';
import productRoutes from './routes/product.route.js';
import userRoutes from './routes/price.route.js';
import dbInit from './db/mongo.js'

const app = express();
app.use(express.json())
app.use(cors());
app.use(productRoutes);
app.use(userRoutes);

//default route
app.get('/', (req, res) => {
    res.send('Welcome to Node Challenge');
});

dbInit();

export default app;
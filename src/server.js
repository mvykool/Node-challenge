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

dbInit();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
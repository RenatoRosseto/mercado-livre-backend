import dotenv from "dotenv";
dotenv.config();

import express from "express";

import productsRoutes from './routes/productsRoutes'
import productDetailsRoutes from './routes/productDetailsRoutes'

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use('/api/products', productsRoutes);
app.use('/api/productDetails', productDetailsRoutes);

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`)
})
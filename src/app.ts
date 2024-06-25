import dotenv from "dotenv";
dotenv.config();

import express from "express";

import productsRoutes from './routes/productsRoutes'
import productDetailsRoutes from './routes/productDetailsRoutes'

const app = express();

app.use(express.json());
app.use('/api/products', productsRoutes);
app.use('/api/productDetails', productDetailsRoutes);

export default app;
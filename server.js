import express from 'express';
import colors from 'colors';
import dotenv from "dotenv";
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'
import categoryRoutes from './routes/categoryRoutes.js';
import cors from 'cors';

// Configure Env
dotenv.config()

// Database Config
connectDB();

// Rest Object
const app = express()

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/category', categoryRoutes)

app.get('/', (req, res) => {
    res.send("<h1>Welcome to my Raj Ecommerce</h1>")
})

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`.bgCyan.white);
})

// server();
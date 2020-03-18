const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000;

const productsRouter =require('./routes/products.js')
app.use(morgan('dev'))
app.use(express.json());
app.use('/products',productsRouter);
app.listen(PORT,()=>console.log('servidor levantado' + PORT))

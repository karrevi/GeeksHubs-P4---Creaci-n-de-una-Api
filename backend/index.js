const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000;

const productsRouter =require('./routes/products.js')
const categoriesRouter =require('./routes/categories.js')
const orderRouter =require('./routes/order.js')

app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/products',productsRouter);
app.use('/categories',categoriesRouter);
app.use('/orders',orderRouter);


app.listen(PORT,()=>console.log('servidor levantado' + PORT))

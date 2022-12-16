const express = require('express');
const { createProduct, getProduct, deleteProduct, updateProduct } = require('../controllers/productController');
const auth = require('../mideleware/auth');
const productRouter = express.Router();


productRouter.get("/", auth, getProduct)

productRouter.post("/", auth, createProduct)

productRouter.delete("/:id", auth, deleteProduct)

productRouter.put("/:id", auth, updateProduct)


module.exports = productRouter;

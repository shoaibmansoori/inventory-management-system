const express = require('express');
const { getCategory, createCategory, deleteCategory, updateCategory } = require('../controllers/categoryController');
const auth = require('../mideleware/auth');
const categoryRouter = express.Router();


categoryRouter.get("/", auth, getCategory)

categoryRouter.post("/", auth, createCategory)

categoryRouter.delete("/:id", auth, deleteCategory)

categoryRouter.put("/:id", auth, updateCategory)


module.exports = categoryRouter;

const express = require('express')
const ProductController = require('../controllers/ProductController')
const route = express.Router()


//product routes
route.post('/productinsert',ProductController.productinsert)
route.get('/productdisplay',ProductController.productDisplay)
route.get('/productview/:id',ProductController.productView)
route.put('/productupdate/:id',ProductController.productUpdate)
route.delete('/productdelete/:id',ProductController.productDelete)








module.exports =route
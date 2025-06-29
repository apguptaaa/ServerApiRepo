const mongoose =require('mongoose')

const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    image:{
        type:String,
      
    }

})

const ProductModel = mongoose.model('product',ProductSchema)
module.exports = ProductModel
const productModel = require('../models/product');

const createProduct = async (req,res)=>{
     const { name , description } = req.body
     const  newProduct = new productModel({
        name : name,
        description : description,
        userId : req.userId
     }) ;
     try{
          
        await newProduct.save();
        res.status(201).json(newProduct);

     }catch(error){
        console.log(error)
        res.status(500).json({ messege : "Something went wrong"});
     }
}

const updateProduct = async (req,res)=>{
     const id = req.params.id;
     const { name , description } = req.body
     const  newProduct  = new productModel({
        name :name,
        description : description,
        userId : req.userId
     }) ;
     try{
          
        await productModel.findByIdAndUpdate(id,newProduct,{new:true});
        res.status(200).json(newProduct);

     }catch(error){
        console.log(error)
        res.status(500).json({ messege : "Something went wrong"});
     }
}

const deleteProduct  = async (req,res)=>{
    const id = req.params.id;
    try{
        const product = await productModel.findByIdAndRemove(id);
        res.status(200).json(product);
    }catch(error){
        console.log(error)
        res.status(500).json({ messege : "Something went wrong"});
     }
}

const getProduct = async (req,res)=>{
    try{
        const product = await productModel.find({userId : req.userId});
        res.status(200).json(product)
    }catch(error){
        console.log(error)
        res.status(500).json({ messege : "Something went wrong"});
     }    
}


module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct
}
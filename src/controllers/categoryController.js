const categoryModel = require('../models/category');

const createCategory  = async (req,res)=>{
     const { title , description } = req.body
     const  newCategory  = new categoryModel({
        title :title,
        description : description,
        userId : req.userId
     }) ;
     try{
          
        await newCategory.save();
        res.status(201).json(newCategory);

     }catch(error){
        console.log(error)
        res.status(500).json({ messege : "Something went wrong"});
     }
}

const updateCategory  = async (req,res)=>{
     const id = req.params.id;
     const { title , description } = req.body
     const  newCategory  = new categoryModel({
        title :title,
        description : description,
        userId : req.userId
     }) ;
     try{
          
        await categoryModel.findByIdAndUpdate(id,newCategory,{new:true});
        res.status(200).json(newCategory);

     }catch(error){
        console.log(error)
        res.status(500).json({ messege : "Something went wrong"});
     }
}

const deleteCategory  = async (req,res)=>{
    const id = req.params.id;
    try{
        const category = await categoryModel.findByIdAndRemove(id);
        res.status(200).json(category);
    }catch(error){
        console.log(error)
        res.status(500).json({ messege : "Something went wrong"});
     }
}

const getCategory  = async (req,res)=>{
    try{
        const category = await categoryModel.find({userId : req.userId});
        res.status(200).json(category)
    }catch(error){
        console.log(error)
        res.status(500).json({ messege : "Something went wrong"});
     }    
}


module.exports = {
    createCategory,
    updateCategory,
    deleteCategory,
    getCategory
}
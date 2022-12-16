const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({

    name : {
        type : String ,
        required : true
    },
    description : {
        type : String ,
        required : true
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
})

module.exports = mongoose.model('Product',ProductSchema)
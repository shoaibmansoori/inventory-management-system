const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({

    title : {
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

module.exports = mongoose.model('Category',CategorySchema)
const mongoose = require('mongoose');

const childrenSchema = new mongoose.Schema({
    fname:{
        type: String,
        required : true,
        trim : true,
    },
    lname:{
        type: String,
        required : true,
        trim : true,
    },
    email:{
        type: String,
        required : true,
        trim : true,
    },
    contactno:{
        type: String,
        required : true,
        trim : true,
    },
});

//collection 
const childrendetails = new mongoose.model("childrenDetail", childrenSchema)
module.exports = childrendetails;
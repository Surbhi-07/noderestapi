const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/childrenDb",{
    useNewUrlParser:true,   
}).then(()=> {
    console.log("connection is sucessfully ");
}).catch((e)=>{
    console.log("connection is failed")
})
const express = require('express');
const index = express();
require('./db/connection')
const router = require('../src/routes/childrenroute')
const port = process.env.PORT || 8000;

index.use(express.json())
//routes middleware
index.use('/children', router);

index.listen(port, function(){
    console.log(`port : ${port}`);
})
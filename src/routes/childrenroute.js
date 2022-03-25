const express = require('express');
const router = express.Router();
const children = require('../colllection/children');
//create
router.post('/createchildren', async(req,res)=>{
    try{
        const create = new children(req.body);
           console.log(req.body)
           const add = await create.save();
           res.status(201)
           send(add)
    }catch(e){
        res.status(400)
        res.send(e)
    }
})
//read
router.get('/readchildren/:id', async(req,res)=>{
    try{
        //const show = req.params.id
        const show = req.params.id
        console.log(req.body.id);
        //const childrenlist = await children.findById(req.params.id);
        const childrenlist = await children.findById(show);
        res.send(childrenlist);
    }catch(e){
        res.status(400)
        res.send(e)
    }
})
//put m sari field update krna pdta hai 
router.put('/editall/:id', async (req,res) =>{
    try{
        const edit = req.params.id
        console.log(req.body)
        const childreneditlist = await children.findByIdAndUpdate(edit,req.body,{
            new:true
        })
    res.send(childreneditlist)
    }catch(e){
        res.status(400).send(e);
    }
})
//patch m particular field update hoti hai 
router.patch('/update/:id',async(req,res)=>{
    try{
        const update = req.params.id
        console.log(req.body)
        const childrenupdate = await children.findByIdAndUpdate(update , req.body, {
            new:true
        })
        res.send(childrenupdate)
        }catch(e){
            res.status(400).send(e);
        }
    })
//delete
router.delete('/destroy/:id',async(req,res)=>{
    try{
        await children.findByIdAndDelete( req.params.id)
        res.status(201)
        res.send({message: "destroy"})
    }catch(e){
        res.status(400).send(e);
    }
})

module.exports = router;
const  express=require('express')
const router=express.Router()

const Cric=require('../models/crick')

//get request api
router.get('/',async(req,res)=>{

    try{
        const cricket=await Cric.findby()
        res.json(cricket)
    }catch(err){
        res.send('Error'+err)
    }
    
})

//find by /:id api
router.get('/:id',async(req,res)=>{

    try{
        const cricket=await Cric.findById(req.params.id)
        res.json(cricket)
    }catch(err){
        res.send('Error'+err)
    }
    
})

//find by update api
router.patch('/:id',async(req,res)=>{

    try{
        const cricket=await Cric.findById(req.params.id)
        cricket.sub=req.body.sub
        const datafinal=await cricket.save()
        res.json(datafinal)
    }catch(err){
        res.send('Error'+err)
    }
    
})

//post data through api after validation
router.post('/',async(req,res)=>{

    try{
        const cric=new Cric({
            name:req.body.name,
            captain:req.body.captain,
            sub:req.body.sub
        })
        const cricdata= await cric.save()
        res.json(cricdata)
    }catch(err){
        res.send('Error'+err)
    }
    
})

module.exports=router
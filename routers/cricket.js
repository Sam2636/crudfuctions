const  express=require('express')
const router=express.Router()

const Cric=require('../models/crick')

//get request api
router.get('/',async(req,res)=>{

    try{
        const cricket=await Cric.find()
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
        //cricket.sub=req.body.sub
        // Update the document fields based on the fields present in the request body
    if (req.body.sub) {
        cricket.sub = req.body.sub;
      }
      if (req.body.name) {
        cricket.name = req.body.name;
      }
      if (req.body.captain) {
        cricket.captain = req.body.captain;
      }
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
//Delete data 
router.delete('/:id', async (req, res) => {
    try {
      const deletedCricket = await Cric.findByIdAndDelete(req.params.id);
      if (!deletedCricket) {
        return res.status(404).json({ error: 'Document not found' });
      }
      res.json(deletedCricket);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  

module.exports=router
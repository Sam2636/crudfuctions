const mongoose=require('mongoose')

const cricSchema=new mongoose.Schema({
    name:{type:String,required:true},
    captain:{type:String,required:true},
    sub:{type:Boolean,required:true,default:false}
})

module.exports=mongoose.model('crick',cricSchema)
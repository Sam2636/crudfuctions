const  express=require('express')
const mongoose=require('mongoose')

const app=express()

//connect to mongodb

mongoose.connect('mongodb://localhost:27017/cricket',{useNewUrlParser:true})

const con =mongoose.connection

con.on('open',function(){
    console.log('connected...');
})


app.use(express.json())

const cricketstatus=require('./routers/cricket')
app.use('/cricket',cricketstatus)


app.listen('9000',function(){
    console.log('server started....');
})
'add file'
##
to start the serve click on 
`nodemon run start`

first step to:
1.npm init 
2. set author name  and press enter to create package.json

second step:
1.npm i express mongodb mongoose

## for development server
third step
2. npm i nodemon --save-dev 


## urls needs to developed
GET -http://localhost/cricket
GET -http://localhost/cricket/<id>
POST -http://localhost/cricket/
PATCH -http://localhost/cricket/<id>

## create a routers folder and create a js file
1.add express and express.router 
2.write a router  and export it

3.import  these in the index js file

`const cricketstatus=require('./routers/cricket')
app.use('/cricket',cricketstatus)`

## create model folder and create a js file for mongo db database basic schema
1.after writing the schema 
use it in the cricket .js page and validate the the schema before posting into database
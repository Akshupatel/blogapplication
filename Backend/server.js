const express= require('express')
const cors = require('cors');
const connectMongodb=require('./connection');
const  postrouter= require('./Router/postrouter');

const app=express();

//middleware
app.use(express.json());
app.use(cors()); 

//connection
connectMongodb('mongodb://localhost:27017/blogapp')
.then(() => console.log("mongodb connected"))
.catch((err) => console.log("Error connecting to MongoDB:", err));

//router
app.use("",postrouter);

app.listen(8000,()=>{
    console.log("server is started on port 8000");
})

//ES5
//1-import express
const express = require('express');
//import logger
const logger = require("./middleware/logger");
//2-init express
const app = express();
//app use logger middleware
app.use(logger);
//testing route
// app.get("/",(req,res)=>{
//     return res.send("Hello F1 ")
// })

// const users = [
//     {
//         name:"marwa",
//         isStudent : true
//     },
//     {
//         name:"amine",
//         isStudent:false
//     }
// ]
// app.get("/api/users",(req,res)=>{
//     res.json(users)
// })
//serve the static folder
app.use(express.static(__dirname + '/view'))

//3-declare PORT
const PORT = 5001;
//-4 Starting server
app.listen(PORT , (err)=>{
    err? 
    console.log("error : ", err):
    console.log(`server is running on port ${PORT}`)
})


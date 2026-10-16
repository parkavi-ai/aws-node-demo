const express = require('express')

 const app= express();
 app.get('/',(req,res)=>{
    res.json({
        message:"Hello from my nodejs application"
    })

 })
 app.listen(3000,()=>{
    console.log("server running on port 3000")
 })
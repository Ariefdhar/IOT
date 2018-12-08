const express = require("express")
const app = express()

var statusLampu = 0;

app.listen(3000,function(){
    console.log("Server is running")
})

app.get("/:lampu",function(req,res){
    statusLampu = req.params.lampu
    res.redirect("/")
})

app.get("/",function(req,res){
    res.send({
        lampu:statusLampu
    })
})
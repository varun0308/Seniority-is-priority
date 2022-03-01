const express = require("express");
const path = require("path");
require("./db/conn");

const User = require("../usermessage1");

const app =express();
console.log();

const port =process.env.PORT || 3000;

//setting path
//const staticpath =path.join(__dirname);
const staticpath= path.join(__dirname,"../Frontend_files");

console.log(staticpath);

//middleware
 app.use(express.static(staticpath));
 app.use(express.urlencoded({extended:false}))


app.get("/",( req,res)=>{
    res.send("hello");
});

app.post("/contact",async(req,res)=>{
    try{
        //res.send(req.body);
        const userData = new User(req.body);
        await userData.save();    
        res.status(201).render("index");
        res.send("Form submitted successfully!!!!");
        

    } catch(error){
        res.status(500).send(error);
    }
})

app.listen(port,() =>{
    console.log(`server is runnning at port no ${port}`);
})

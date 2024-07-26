const express=require("express")
const app=express()
const port = process.env.PORT ||3000
app.listen(port,()=>{
    console.log("port is listening")
})
const path =require("path")
app.set('view engine', 'hbs');
const viewspart=path.join(__dirname,"./temp/views")
app.set('views',viewspart)
const  partials=path.join(__dirname,"./temp/partials")
var hbs=require("hbs")
const { title } = require("process")
hbs.registerPartials(partials)
app.get("/",(req,res)=>{
    res.render("index",{
        title:"Home Page",
        desc:"this is the home page"
    })
})
app.get("/team",(req,res)=>{
    res.render("team",{
        title:"team",
        name:"ninga",
        number:6
    })
})
app.get("/service",(req,res)=>{
    res.render("service",{
        title:"service",
        disc:"this is service page"
    })
})
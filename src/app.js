require('dotenv').config()
const express=require('express');
const path=require('path');
const hbs=require('hbs');
const app=express();
const port=process.env.PORT || 8000;
const static_path=(path.join(__dirname,"../public"));
const template_path=(path.join(__dirname,"../templates/views"));
const partial_path=(path.join(__dirname,"../templates/partial"));
app.set('view engine', 'hbs');
app.set('views',template_path);
hbs.registerPartials(partial_path);
app.use(express.static(static_path));

app.get("",(req,res)=>{
    res.render('index.hbs')
})
app.get("/doctor",(req,res)=>{
    res.render('doctor.hbs')
   
})
app.get("/doctor/appointment",(req,res)=>{
    res.render('appointment.hbs')
})
app.use((req,res)=>{
    
    res.status(404).render('404'); 
})
app.listen(port,()=>{
    console.log(`listening ${port}`)
})

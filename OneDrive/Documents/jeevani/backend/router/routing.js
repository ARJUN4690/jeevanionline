const express = require("express");



const routes = express.Router();

//home
routes.get('/',(req,res)=>{
  res.render('home',{title:"jeevani"});
});

routes.post('/',(req,res)=>{
  res.send('post req from home');
});

//about
routes.get('/about',(req,res)=>{
res,send("we are online consultaion page")
});


routes.post('/about',(req,res)=>{
res.send("we are online consultants");
});



module.exports = routes;
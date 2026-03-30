
const express = require("express");
const routes = require("./router/routing.js");
const app = express();
const PORT = 8000;
const {engine} = require('express-handlebars');

//handlebars
app.engine('handlebars', engine ({defaultLayout:'main'})); // register engine
app.set('view engine', 'handlebars'); //set view 
app.set('views','./views'); // set folder

//staticpage
app.use(express.static('public'));

//middleware
app.use('/', routes);




app.listen(PORT,()=>{
console.log (`server is running in the localhost${PORT}`);
});
const express= require('express');
const bodyParser=require('body-parser');
const app=express();
app.set('view engine','ejs');
app.listen('3000',function(){});

app.get('/',function(req,res){
  var currentDay= new Date();
  var day=currentDay.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  res.render('list',{today:daylist[day]});


})

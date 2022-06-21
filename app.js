const express= require('express');
const bodyParser=require('body-parser');
const app=express();

app.listen('3000',function(){});

app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
})

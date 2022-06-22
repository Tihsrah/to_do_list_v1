const express= require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))
app.set('view engine','ejs');


var items=[];

app.listen('3000',function(){});

app.get('/',function(req,res){
  var currentDay= new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  var day=currentDay.toLocaleDateString("en-US",options);

  res.render('list',{today:day,test:items});


})

app.post('/',function(req,res){
  // var body=__dirname+"/list.ejs";
  var item=req.body.input;
  items.push(item);
  res.redirect('/');
})

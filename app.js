const express= require('express');
const bodyParser=require('body-parser');
const app=express();
const date=require(__dirname+"/date.js");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))
app.set('view engine','ejs');


var items=[];
let workItems=[];
app.listen('3000',function(){});

app.get('/',function(req,res){
  let day=date.getDate();

  res.render('list',{today:day,test:items});


})

app.post('/',function(req,res){
  // var body=__dirname+"/list.ejs";
  var item=req.body.input;
  if(req.body.list==="Work"){
    workItems.push(item);
    res.redirect("/Work");
  }
  else{
    items.push(item);
    res.redirect('/');
  }
})

app.get("/Work",function(req,res){
  res.render("list",{today:"Work List",test:workItems});

})
app.post("/Work",function(req,res){
  let item=req.body.input;
  workItems.push(item);
  res.redirect("/work");
})

app.get('/about',function(req,res){
  res.render("about");
})

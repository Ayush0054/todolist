const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")
const app = express();

let items = ["Buy Food","Cook Food","Eat Food"];
let workItems =["op"];

app.set('view engine', 'ejs');                            // ejs as viewengine

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"))


app.get("/",function(req,res){
    
  let day = date.getdate();

    res.render("list", {ListTitle: day,newlistitems: items});
});



app.post("/",function(req,res){
    let item= req.body.newItem;
 
    if(req.body.list==="work"){
     workItems.push(item);
     res.redirect("/work");
    }
   else{
    items.push(item);
    res.redirect("/");
   }
  
});



app.get("/work",function(req,res){
    res.render("list",{ListTitle : "Work List",newlistitems:workItems});
});


// app.post("/work",function(req,res){
//     let item = req.body.newItem;
//     workItems.push(item);

//     res.redirect("/work");
// });



app.get("/about",function(req,res){
    res.render("about");
});


app.listen(3000,function(){
    console.log("server started on port 3000");
});
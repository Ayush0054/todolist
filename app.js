const express = require("express");
var mongoose= require("mongoose");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")
const app = express();



app.set('view engine', 'ejs');                            // ejs as viewengine

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"))


mongoose.connect("mongodb://localhost:27017/todoDB" , {useNewUrlParser: true,useUnifiedTopology:true});
const itemSchema={
    name:String
}
const Item=mongoose.model("Item",itemSchema);
const item1 = new Item({
    name:"welcome to hehe",
})
const item2 = new Item({
    name:"like and share",
})
const item3 = new Item({
    name:"enjoy irony",
})

const d=[item1,item2,item3];




// const items = [];
// const workItems =[];

app.get("/",function(req,res){

  const day = date.getdate();
 Item.find({},function(err,f){
    // console.log(f);
    if(f.length===0){
        Item.insertMany(d,function(err){
            if(err){
                console.log(err);
            }
            else{
                console.log("items saved to database");
            }
        });
        res.redirect("/");
    }else{

        res.render("list", {ListTitle: day,newlistitems: f});
    }
 });
});


app.post("/",function(req,res){
 
   const itemName=req.body.n;
   const item=new Item({
    name:itemName
   });
   item.save();
   res.redirect("/");

});

app.post("/delete",function(req,res){
    const check = req.body.checkbox;
    Item.findByIdAndRemove(check,function(err){
        if(!err){
            console.log("successfully deleted");
            res.redirect("/");
        }
    })
});

app.get("/about",function(req,res){
    res.render("about");
});


app.listen(3000,function(){
    console.log("server started on port 3000");
});
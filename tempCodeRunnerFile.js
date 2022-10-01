app.get("/work",function(req,res){
    let route = "/";
    res.render("list",{ListTitle : "Work List",newlistitems:workItems ,route: route});
});
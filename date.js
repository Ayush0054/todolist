/*module exprot conncept */     /*module.exports or exports both are same */
exports.getdate = function(){


    let today = new Date();
    let options = {
        weekday : "long",
        day: "numeric",
        month: "long"
    };
    
   return day = today.toLocaleDateString("en-US", options);
   
};

exports.getday = function(){


    let today = new Date();
    let options = {
        weekday : "long"
    };
    
    return day = today.toLocaleDateString("en-US", options);
    
};
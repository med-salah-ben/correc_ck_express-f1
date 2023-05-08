let date = new Date();

let currentHour = date.getHours();
console.log("Hours : " , currentHour)

let currentDay = date.getDay();
console.log("dat+y : " , currentDay);

function logger(req,res,next){
    if(currentHour >8 && currentHour <18 && currentDay >0 && currentDay <6){
        next()
    }else{
        res.send("<h1>Sorry we are Closed</h1>")
    }
}

module.exports = logger
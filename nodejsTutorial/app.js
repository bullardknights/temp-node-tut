const {readFile} = require('fs')



readfile('./content/first.txt','utf8',(err,data)=>{
    if(err){
        return
    } else {
        console.log(data)
    }
})
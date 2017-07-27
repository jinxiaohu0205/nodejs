const fs = require('fs');

fs.writeFile("hello.thml","hello",function(e){
    if(e){

    }else{
        console.log("创建成功");
    }
})
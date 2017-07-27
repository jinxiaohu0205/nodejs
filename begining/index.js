#!/usr/bin/env node

var fs=require("fs");  //文件包
var path=require("path");//路径包
fs.readdir("./",function(error,data){
    data.forEach(function(file,index){
        // console.log(data);
        if(path.extname(file)==".css"){   //就是返回文件的扩展名
            fs.unlinkSync(file);
            console.log("删除成功");
        }
    })
})
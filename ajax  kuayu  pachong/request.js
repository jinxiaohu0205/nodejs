var express=require("express");
var app=express();
var path=require("path");
var request=require("request");
var cheerio = require('cheerio');

app.use(express.static(__dirname));
app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"request.html"));
})

app.get("/zhihu",function(req,res){
    var url=req.query.url;
    request(url,function(error,header,body){
        var $=cheerio.load(body);
        var obj=$("#lg img");
        var ur=obj[0].attribs.src;
        // var ur=$("//www.baidu.com/img/b;d_logo.png");
        res.send("http:"+ur);
    })
})
app.listen(8888);
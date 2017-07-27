var express=require("express");
var app=express();
app.get("/",function(req,res){
    var fn=req.query.callback;
    var data=[
        {id:1,prices:100,nums:1,name:"电脑"},
        {id:2,prices:200,nums:2,name:"电视"},
        {id:3,prices:300,nums:3,name:"冰箱"},
        {id:4,prices:400,nums:1,name:"彩电"},
        {id:5,prices:500,nums:2,name:"洗衣机"},
        {id:6,prices:100,nums:3,name:"手机"}
    ]
    var data=JSON.stringify(data);
    // res.send(`window.onload=function(){${fn}('${data}')}`)
    res.send(`${fn}('${data}')`)
    // res.send("var a=10;console.log(a)
app.listen(9999);");
})
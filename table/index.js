var express=require("express");
var table=express();
var ejs=require("ejs");
var path=require("path");
var mysql=require("mysql");
var bodyParser=require("body-parser");
table.use(bodyParser.json());
// 静态文件
table.use(express.static(path.join(__dirname,"static")));
// 模版
table.set("views",path.join(__dirname,"template"));//放置模版文件的目录
table.set("view engine","ejs");//设置模版引擎用ejs这个解析模版
table.get("/",function (req,res) {
    res.sendFile(path.join(__dirname,"template/index.html"));
})
//连接数据库
var connect=mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"",
    database:"uek1610"
});
table.get("/",function(req,res){
    res.render("index");
});
//查询 路由
table.get("/select",function(req,res){
    connect.query("select * from stuinfo",function(error,result){
        // console.log(result);
        res.send(JSON.stringify(result));
    });
});
//修改 路由
table.get("/update",function(req,res){
    var id=req.query.id;
    // console.log(id)
    var val=req.query.val;
    // console.log(val);
    var ziduan=req.query.ziduan;
    // console.log(ziduan);
    connect.query(`update stuinfo set ${ziduan}="${val}" where id=${id}`,function(error,result){
        // console.log(result);
        res.send("ok");
    })
})
//删除 路由
table.get("/del",function(req,res){
    var id=req.query.id;
    // console.log(id);
    connect.query("delete from stuinfo where id="+id,function(error,result){
        // console.log(result);
        if(result.affectedRows>0){
            res.send("ok");
        }
    })
})
//添加   路由
table.post("/addData",function(req,res){
    var name=req.body.name;
    console.log(name);
    var age=req.body.age;
    var sex=req.body.sex;
    var classes=req.body.classes;
    connect.query(`insert into stuinfo (name,age,sex,classes) values ('${name}','${age}','${sex}','${classes}')`,function(error,result){
        // console.log(result.insetId);
        res.send("ok");
    })
})
table.listen(8888);
/*添加数据*/

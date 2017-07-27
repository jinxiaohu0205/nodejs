var express=require("express");
var path=require("path");
var ejs=require("ejs");
var mysql=require("mysql");
var body=require("body-parser")
var app=express();
app.listen(9999);
app.use(body.json());

var connect=mysql.createConnection({
    user:"root",
    host:"localhost",
    port:"3306",
    password:"",
    database:"table"
})

//改变路径
app.use(express.static(path.join(__dirname,"static")));
app.set('views',path.join(__dirname,'template'));
app.set('view engine','ejs');

// app.get("/",function(req,res){
//     res.render("index");
// })

//首页进入地址
app.get("/",function(req,res){
    // res.send("111");
    // res.end();
    // res.sendFile(path.join(__dirname,"template/index.html"));
    res.sendFile(path.join(__dirname,"template/index.html"));
})

// 查数据
app.get("/select",function(req,res){
    connect.query("select * from student",function(error,result){
        res.send(JSON.stringify(result));
    })
})

// 编辑
app.get("/update",function(req,res){
    var id=req.query.id;
    var val=req.query.val;
    var ziduan=req.query.ziduan;
    connect.query(`update student set ${ziduan}='${val}' where id=${id}`,function(error,result){
        res.send("ok");
    })
})

//删除
app.get("/del",function(req,res){
    var id=req.query.id;
    connect.query("delete from student where id="+id,function(error,result){
        if(result.affectedRows>0){
            res.send("ok");
        }
    })
})

//添加
// app.get("/add",function(req,res){
//     connect.query("insert into student (name,sex,age) values ('','','')",function(error,result){
//         //这是里边存了他的id;
//         res.send(result.insertId.toString());
//     })
// })

// 动画添加
app.post("/addData",function(req,res){
    var name=req.body.name;
    console.log(name);
    var age=req.body.age;
    var sex=req.body.sex;
    connect.query(`insert into student (name,age,sex) values ('${name}','${age}','${sex}')`,function(error,result){
        console.log(result);
        res.send("ok");
    })
})





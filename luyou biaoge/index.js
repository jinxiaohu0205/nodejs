var express=require("express");
var path=require("path");
var mysql=require("./mysql");
var app=express();
app.use(express.static(path.join(__dirname,"static")));


//主页
app.get("/",function(req,res){
  res.sendFile(path.join(__dirname,"static/tpl/index.html"));
})
app.get("/tpl/:name",function(req,res){
    res.sendFile(path.join(__dirname,"static/tpl/"+req.params.name));
})

//查数据
app.get("/select",function(req,res){
  mysql.query("select * from student",function(error,result){
        res.send(JSON.stringify(result));
  })
})
//删除
app.get("/del",function(req,res){
    var id=req.query.id;
    mysql.query("delete from student where id="+id,function(){
        res.send("ok");
    })
})

//编辑
app.get("/edit",function(req,res){
    var id=req.query.id;
    var name=req.query.name;
    var sex=req.query.sex;
    var age=req.query.age;
    mysql.query(`update student set name='${name}',sex='${sex}',age='${age}' where id=${id}`,function(error,result){
        res.send("ok");
    })
})

//添加
app.get("/add",function(req,res){
    var name=req.query.name||"";
    var sex=req.query.sex||"";
    var age=req.query.age||"";
    console.log(name);
    console.log(sex);
    console.log(age);
    mysql.query(`insert into student (name,sex,age) values ('${name}','${sex}','${age}')`,function(error,result){
        res.send(result.insertId.toString());
    })
})



app.listen(8888);
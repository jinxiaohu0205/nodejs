var  express=require("express");
var path=require("path");
var ejs=require("ejs");
var mysql=require("mysql");
var body=require("body-parser");
var app=express();
app.listen(8888);

app.use(body.urlencoded({ extended: false }))   //post传送的时候制定怎么解析
//
var connection =mysql.createConnection({
    host:'localhost',
    // port:"3306",
    user:'root',
    password:'',
    database:'table'
})
// 查询数据库
app.get("/",function(req,res) {
    connection.query("select * from student", function (error, result) {
        res.render("index", {result: result});
    })
})

app.use(express.static(path.join(__dirname,'static')));
app.set('views',path.join(__dirname,'template'));
app.set('view engine','ejs');

//添加信息
app.get("/addinfo",function(req,res){
    var name=req.query.name;
    var age=req.query.age;
    var sex=req.query.sex;
    connection.query(`insert into student (name,age,sex) values ('${name}',${age},'${sex}')`, function (error, result) {
        // console.log(result);
        res.redirect("/add");
    })
})

app.get("/add",function(req,res){
    res.render("add");
})
// 删除信息
app.get("/del/(:id)?",function(req,res){
    var id=req.params.id;
    connection.query('delete from student where id='+id, function (error, result) {
        res.redirect("/");
    })
})


// 编辑
app.get("/edit/(:id)?",function(req,res){
    var id=req.params.id;
    connection.query('select * from student where id='+id, function (error, result) {
        // console.log(result);
        res.render("edit", {result: result});
    })
})

app.post("/editinfo/(:id)?",function(req,res){
    // var id=req.query.id;
    var id=req.params.id;
    // var id=req.body.id;
    var name=req.query.name;
    var age=req.query.age;
    var sex=req.query.sex;
    console.log(id);
    connection.query(`update student set name='${name}',age='${age}',sex='${sex}' where id=${id}`, function (error, result) {
        // console.log(result);
        if(result.affectedRows==1){
            res.redirect("/");
        }
    })
})

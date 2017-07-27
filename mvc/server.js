var path=require("path");
var http=require("http");
var fs=require("fs");
var object={};
class server{
    constructor(){

    }

    //启动函数
    listen(porl){
       console.log(11111);
       // this.create(porl);
    }
    //配置路径
    set(url,callback){
       object[url]=callback;
    }
    //创建服务器
    create(porl){
        var that=this;
        http.createServer(function(req,res){
            that.result(req,res);
        })
    }
    //执行结果
    result(req,res){
        // res对象  相工流
        var url=path.parse(req.url);
        if(url.base=="favicon.ico"){
            res.end();
        }else{
            var fullPath=path.resolve(url.dir,url.base);
            fs.readFile(fullPath,function(error,file){
                if(error){
                    fs.end("文件找不到");
                }else{

                }
            })
        }
    }
}
module.exports=new server();
// console.log(module);



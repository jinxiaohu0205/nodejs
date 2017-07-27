/**
 * Created by tengfei on 2017/4/13.
 * 静态服务器
 // */
var http=require("http");
var serverObj=http.createServer();
serverObj.listen(7777);
var path=require("path")//处理路径
var fs=require("fs");
var config=require("./config");
//基于事件的非阻塞型的语言   单线程异步机制
//缺点：不太稳定
serverObj.on("request",function(req,res){
    res.setHeader("content-type","text/html;charset=utf-8")
    // res.writeHead(200,{"content-type":"text/paint;charset=utf-8"})
    var url=path.parse(req.url);
    // console.log(url)
    var root=config.root.dir;
    if(url.base=="favicon.ico"){
        res.end();
    }else{
        fs.readdir(root,function(error){
            if(error){
                console.log(1);
                res.writeHead(404,{"content-type":"text/html;charset=utf-8"});
                res.end("根目录不存在");
                process.exit();
            }
        })
        // console.log(root);
        var fullPath=path.resolve(root,url.base);
        var ext =url.ext;
        if(!ext){
            fullPath=path.resolve(root,config.index.index);
        }
        fs.readFile(fullPath,function(error,file){
            if(error){
                res.setHeader("content-type","text/html;charset=utf-8")
                // res.writeHead(404,{"content-type":"text/html;charset=utf-8"});
                res.end(fullPath+"文件找不到");
            }else{
                var info=fs.statSync(fullPath);
                var mtime=info.mtime.toUTCString();
                // console.log(info);
                // console.log(mtime);
                if((req.headers["if-modified-since"])&&req.headers["if-modified-since"]==mtime){
                    res.writeHead(304,{
                        "content-type":type+";charset=utf-8"});
                    res.end();
                }else {

                    var type = config.type[url.ext];
                    res.setHeader("cache-control", "max-age=" + 1000 * 60);

                    res.setHeader("last-modified", info.mtime.toUTCString());

                    res.writeHead(200, {
                        "content-type": type + ";charset=utf-8"
                    });
                    console.log(req.headers);
                    res.write(file);
                    res.end();
                }
            }
        })

            //返回buffer
    }
})

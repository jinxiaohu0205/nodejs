var stream=require("stream");
// var fs=require("fs");
// var read=new stream.Readable;
// var write=new stream.Writable;
transform1=new stream.Transform;
transform2=new stream.Transform;
transform3=new stream.Transform;

transform1._read=function(){
    this.push("a");
    this.push("b");
    this.push(null);
}
transform2._transform=function(a,b,c){
    this.push(a.toString().toUpperCase());
    c();
}
transform3._transform=function(a,b,c){
    console.log(a.toString());
    c();
}
transform1.pipe(transform2).pipe(transform3);

// read.push("a");
// read.push("b");
// read.push(null);
// console.log(read.read(2).toString());
// read.on("readable",function(){
//     console.log("可以读了");
// })
// read.on("data",function (data) {
//     console.log(data.toString());
// })
// read.on("end",function(){
//     console.log("over");
// })

// read.pipe(process.stdout)

// read.on("data",function(data){
//     write.write(data);
// })
// write._write=function(a,b,next){
//     fs.appendFile("1.html",a.toString());
//     next();
// }
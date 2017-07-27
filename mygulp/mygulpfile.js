var obj=require("./mygulp");

obj.task("aaa",function(){
    console.log('aaa');
})

obj.task("bbb",function(){
    console.log('bbb');
})
obj.task("ccc",function(){
    console.log("ccc");
})
obj.task("ddd",function(){
    console.log("ddd");
})
console.log(this.taskinfo);
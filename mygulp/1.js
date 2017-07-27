var exec=require('child_process').exec;

exec("find ./*.js",function(error,data){
    console.log(data);
})
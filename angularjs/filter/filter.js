angular.module("filter",[])
.filter("minormax",function(){
    // console.log(origin,type);
    return function(origin,type){
        var min=origin[0];
        for(var i=0;i<origin.length;i++){
                if(type=="min"){
                    if(origin[i]<min){
                        min=origin[i];
                    }
                }else if(type=="max"){
                    if(origin[i]>min){
                        min=origin[i];
                    }
                }
        }
        return min;
    }
}).filter("chong",function(){
   return function(origin){
       var arr=[];
       for(var i=0;i<origin.length;i++){
           var flag=true;
           for(var j=i+1;j<origin.length;j++){
               if(origin[i]==origin[j]){
                   flag=false;
                   break;
               }
           }
           if(flag){
               arr.push(origin[i]);
               // flag=true;
           }
       }
       return arr;
   }
})
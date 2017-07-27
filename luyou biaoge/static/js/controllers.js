angular.module("controllers",["services"])
.controller("main",["$scope","$http","Stuinfo",function($scope,$http,Stuinfo){
        Stuinfo.then(function(data){
            // Stuinfo.data=data.data;
            $scope.data=data.data;
        })
       $scope.del=function(id){
           $scope.data.forEach(function(obj,index){
               if(obj.id==id){
                   $http({url:"del",params:{id:id}}).then(function(e){
                    if(e.data=="ok") {
                        $scope.data.splice(index,1);
                    }
                   })
               }
           })
       }
}]).controller("edit",["$scope","Stuinfo","$routeParams","$http",function($scope,Stuinfo,$routeParams,$http){
        Stuinfo.then(function(data){
            // Stuinfo.data=data.data;    //因为他是全局变量
            $scope.data=data.data;
            var id=$routeParams.id;
            $scope.data.forEach(function(obj,index){
                if(obj.id==id){
                    $scope.current=obj;    //这必须在定义一个值  不然下边的话就不能使用$scope
                }
            })
         })

    $scope.submit=function(id){
        var current={};
        $scope.data.forEach(function(obj,index){
            if(obj.id==id){
                current=obj;
            }
        })
        $http({url:"/edit",params:current}).then(function(data){
            if(data.data=="ok"){
               alert("修改成功");
            }
        })
    }

}]).controller("add",["$scope","Stuinfo","$routeParams","$http",function($scope,Stuinfo,$routeParams,$http){
    Stuinfo.then(function(data){
        Stuinfo.data=data.data;
        $scope.data=Stuinfo.data;

    })
    $scope.add=function(){
        var obj={};
        //下边就利用的双向绑定
        obj.name=$scope.name;
        obj.age=$scope.age;
        obj.sex=$scope.sex;
        $http({url:"add",params:obj}).then(function(e){
            alert(e.data);
            obj.id=e.data;
            $scope.data.push(obj);
        })
    }

}])
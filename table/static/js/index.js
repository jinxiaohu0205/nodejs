angular.module("myapp",["ngRoute","ngAnimate"]).config(function ($routeProvider) {
    $routeProvider.when('/',{
        templateUrl:"/index/table.html",
        controller:"table"
    }).when('/add',{
        templateUrl:"/index/add.html",
        controller:"add"
    })
}).controller("table",["$scope","$http","$timeout",function($scope,$http,$timeout){
    $scope.isshow=false;
    //查找数据
    $http({url:"/select"}).then(function(data){
        // console.log(data.data);
        $scope.data=data.data;
    });
    //修改数据
    $scope.blur=function(id,val,ziduan){
        $scope.isshow=true;
        // console.log(id,val,ziduan)
        $http({url:"/update",params:{id:id,val:val,ziduan:ziduan}}).then(function(data){
            if(data.data=="ok"){
                $timeout(function(){
                     $scope.isshow=false;
                },2000)
            }
        })
    }
    //删除数据
    $scope.del=function(id){
        $scope.isshow=true;
        $http({url:"/del",params:{id:id}}).then(function(data){
           $scope.data.forEach(function (obj,index) {
              if(obj.id==id){
                  $scope.isshow=false;
                  $scope.data.splice(index,1);
              }
           })
        })
    }
    //添加数据
    // $scope.add=function (id){
    //     $http({url:"/add"}).then(function(data){
    //         if(data.data){
    //             var obj={};
    //             obj.id=e.data;
    //             obj.name="";
    //             obj.sex="";
    //             obj.classes="";
    //             obj.age="";
    //             $scope.data.push(obj);
    //         }
    //     })
    // }
}]).controller("add",["$scope","$http",function ($scope,$http) {
        $scope.name="";
        $scope.age="";
        $scope.sex="";
        $scope.classes="";
        $scope.addData=function (name,age,sex,classes) {
            console.log(name);
            $http({
                method:"post",
                url:"/addData",
                data:{
                    name:name,
                    age:age,
                    sex:sex,
                    classes:classes
                }
            }).then(function successCallback(res) {
                console.log(res.data);
            })
        }
}])
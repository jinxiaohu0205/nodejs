
angular.module("myapp",["ngRoute","ngAnimate"])
    .config(function ($routeProvider) {
        $routeProvider.when('/',{
            templateUrl:"/index/table.html",
            controller:"table"
        }).when('/add',{
            templateUrl:"/index/add.html",
            controller:"add"
        })
    })
    .controller("table",["$http","$scope","$timeout",function($http,$scope,$timeout){
        $scope.isshow=false;
        $http({url:"select"}).then(function(data){
            console.log(data);
            $scope.data=data.data;
        });
        // 编辑
        $scope.blur=function(id,val,ziduan){
            $scope.isshow=true;
            $http({url:"/update",method:"get",params:{id:id,val:val,ziduan:ziduan}}).then(function(data){
                if(data.data=="ok"){
                    $timeout(function(){
                        $scope.isshow=false;
                    },2000)
                }
            });
        }

        // 删除
        $scope.del=function(id){
            $scope.isshow=true;
            $http({url:"/del",params:{id:id}}).then(function(e){
                if(e.data=="ok"){
                    $scope.isshow=false;
                    $scope.data.forEach(function(obj,index){
                        if(obj.id==id){
                            $scope.data.splice(index,1);
                        }
                    })
                }
            })
        }

        // 添加
        // $scope.add=function () {
        //     $http({url:"/add"}).then(function(e){
        //         if(e.data){
        //             console.log(e.data);
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

        //添加

    }]).controller("add",["$scope","$http",function ($scope,$http) {
        $scope.name="";
        $scope.age="";
        $scope.sex="";
        $scope.addData=function (name,age,sex) {
            console.log(name);
            console.log(age);
            console.log(sex);

            console.log(name);
            $http({
                method:"post",
                url:"/addData",
                data:{
                    name:name,
                    age:age,
                    sex:sex
                }
            }).then(function successCallback(res) {
                console.log(res.data);
            })
        }
}])


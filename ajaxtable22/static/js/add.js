angular.module("myapp",["ngRoute","ngAnimate"])
    .config(function($routeProvider){
        $routeProvider.when("/",{
            templateUrl:"main.html",
            controller:"main"
        }).when("/add/:id",{
            templateUrl:"add.html",
            controller:"add"
        })
    }).controller("main",function($scope){
    $scope.data=[
        1111,222,333,444,555
    ]
}).controller("list",function($scope){
    $scope.data=[
        1111,222,333,444,555
    ]
})

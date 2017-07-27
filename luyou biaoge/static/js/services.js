angular.module("services",[])
.factory("Stuinfo",function($http,$q){
    // return $http({url:"/select"});//  就是为了不同页面获取一样的数据

    var defer=$q.defer();
    console.log(defer);
    $http({url:"select"}).then(function(e){
        defer.resolve(e);
    })
    //就是返回一个对象
    return defer.promise;
})

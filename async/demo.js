var  async=require("async");


//实现串行
// async.series([
//         function(callback) {
//             setTimeout(function(){
//                 console.log("one");
//                 callback(null, 'one1');
//             },2000)
//         },
//         function(callback) {
//             setTimeout(function(){
//                 console.log("two");
//                 callback(null, 'two1');
//             },2000)
//         }
//     ],
// // optional callback
//     function(err, results) {
//         if(err){
//             console.log(err);
//         }else{
//             console.log(results);
//         }
//     });


//并行

async.auto({
    maicai: function(callback) {
        setTimeout(function () {
            console.log('maicai');
            callback(null, 'cai', 'converted to array');

        },3000)
        // async code to get some data
    },
    mairou: function(callback) {
        setTimeout(function () {
            console.log('mairou');
            callback(null, 'rou');

        },5000)
    },
    zuocai: ['maicai', 'mairou', function(results, callback) {//买菜，买肉并行
        setTimeout(function () {
            console.log('zuocai', results);//zuocai { maicai: [ 'cai', 'converted to array' ], mairou: 'rou' }
            callback(null, 'zuo1');

        },3000)
    }],
    chaorou: ['zuocai', function(results, callback) {//做菜，炒肉串行，炒肉结束后整个执行完
        setTimeout(function () {
            console.log('chaorou', JSON.stringify(results));
            //chaorou {"maicai":["cai","converted to array"],"mairou":"rou","zuocai":"zuo1"}
            callback(null, {'file':results.zuocai, 'email':'user@example.com'});

        },3000)
    }]
}, function(err, results) {
    console.log('err = ', err);//null
    console.log('results = ', results);//results =  { maicai: [ 'cai', 'converted to array' ], mairou: 'rou',zuocai: 'zuo1',chaorou: { file: 'zuo1', email: 'user@example.com' } }
});

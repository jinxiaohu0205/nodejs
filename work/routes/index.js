var express = require('express');
var router = express.Router();
var path=require("path");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'ejs111' });
});
router.get('/welcome', function(req, res, next) {
    res.render('welcome');
});
// router.get("/tpl/:name",function(req,res){
//     console.log(1);
//     res.sendFile(path.join(progress.cwd(),"public/tpl/"+req.params.name));
// })

module.exports = router;

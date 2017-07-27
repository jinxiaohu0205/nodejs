var request=require("request");
var cheerio=require("cheerio");
var express=require("express");


request("http://tech.qq.com/",function(error,header,body){
    var $=cheerio.load(body);
    var arr=[];
    $("#listZone .O-tpList").each(function(index,val){
        var obj={};
        var img=$(this).find("")
    })
})
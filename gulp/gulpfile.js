var gulp = require('gulp');
var uglify=require('gulp-uglify');
var css=require('gulp-uglifycss');
var less=require('gulp-less');
var connect=require('gulp-connect');
var concat=require('gulp-concat');
gulp.task('uglify', function() {
    gulp.src("src/js/*mygulp.js").pipe(uglify()).pipe(gulp.dest("dest/js")).pipe(connect.reload());
});
gulp.task('concat',function(){
    // gulp.src(['src/js/1.js', 'src/js/2.js']).pipe(concat('all.js')).pipe(uglify()).pipe(gulp.dest("dest/js"))
    gulp.src('src/js/*mygulp.js').pipe(concat('all.js')).pipe(uglify()).pipe(gulp.dest("dest/js"))
});

gulp.task('css', function() {
    gulp.src("src/less/*.less").pipe(less()).pipe(css()).pipe(gulp.dest("dest/css")).pipe(connect.reload());
});
gulp.task('html1', function() {
    gulp.src("./*.html").pipe(connect.reload());
});


gulp.task('connect',function(){
    connect.server({
        port:8888,
        root: './',
        livereload: true
    });
});

gulp.task('watch',function(){
    gulp.watch("src/js/*mygulp.js",["concat"]);
    gulp.watch("src/less/*.less",["css"]);
})
gulp.task('default',["watch","connect","html1"]);
var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify'); // js压缩


// var minhtml = require('gulp-htmlmin'); //html压缩
var imagemin = require('gulp-imagemin'); // image压缩
// var clean= require('gulp-clean'); //清空文件夹
// var rename = require('gulp-rename'); // 重命名
var jshint = require('gulp-jshint'); // js代码规范性检查
gulp.task('build:css', function() {
    gulp.src('./src/css/*.css')
        .pipe(concat('index-merge.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css/')); // 
})

gulp.task('build:js', function() {
    gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('merge.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
})

gulp.task('build:image', function() {
    gulp.src('src/imgs/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/imgs'));
})

gulp.task('build', ['build:css', 'build:js', 'build:image']);
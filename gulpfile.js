/**
    File Name: gulpfile.js
	  Author: Abhishek H Shekara
   	Description: This is the file for handling minification and build content for the App.
**/

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('sass', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(cleanCSS({keepSpecialComments : 0}))
        .pipe(cssmin())
        .pipe(rename('main.css'))
        .pipe(gulp.dest('src/css/'))
});
gulp.task('watch', function () {
    gulp.watch('src/scss/*.scss', ['sass']);
})
gulp.task('default', ['watch','sass']);

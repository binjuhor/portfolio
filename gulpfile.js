'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src("./public/assets/*.scss")
        .pipe(sass.sync().on('error',sass.logError))
        .pipe(gulp.dest('./public/assets/'));
});

gulp.task('sass:watch', function(){
    return gulp.watch('./public/assets/*.scss',['sass']);
});
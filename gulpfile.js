'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./src/assets/styles/pages/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/assets/styles'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/assets/styles/**/*.scss', gulp.series('sass'));
});


const imagemin = require('gulp-imagemin');
gulp.task('imagemin', () =>
    gulp.src('./src/assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/assets/images'))
);
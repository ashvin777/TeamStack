var gulp = require('gulp');
var sass = require('gulp-sass');
var fs = require('fs');
var recursive = require('recursive-readdir');

gulp.task('sass', function() {
  recursive('src/', [function(path, stats) {
    if (stats.isDirectory()) {
      gulp.src(path + "/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(path));
    }
  }], function() {});
});

gulp.task('sass:watch', function() {
  gulp.watch('./src/**/*.scss', ['sass']);
});

/*Gulp file browser*/
var gulp = require('gulp');
var path = require('path');
var concat = require('gulp-concat');
/*Less*/
var less = require('gulp-less');
var LessClean = require('less-plugin-clean-css');
var lessMin = new LessClean();

//Init task less
gulp.task('compile-less', function() {
  /*First compile-less*/
  return gulp.src('./public/src/less/*.less')
  .pipe(concat('all.min.less'))
  .pipe(less({
    paths: [path.join(__dirname, 'less', 'includes')],
    plugins: [lessMin]
  })).pipe(gulp.dest('./public/dist/css/'));
});

// watch less
gulp.task('watch-less', function() {
  return gulp.watch('./public/src/less/*.less', ['compile-less']);
});

//Init gulp
gulp.task('default', ['compile-less']);

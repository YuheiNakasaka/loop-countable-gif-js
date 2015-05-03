var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('connect', function(){
  connect.server({
    root: [__dirname],
    port: 9001
  });
});

gulp.task('default', ['connect']);
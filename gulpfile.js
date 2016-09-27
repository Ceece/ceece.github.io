var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('css', function () {
  return gulp.src([
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "node_modules/font-awesome/css/font-awesome.min.css"
    ]).pipe(gulp.dest('css'))
});

gulp.task('fonts', function () {
  return gulp.src([
    "./node_modules/bootstrap/dist/fonts/*",
    "./node_modules/font-awesome/fonts/*"
    ]).pipe(gulp.dest('fonts'))
});

gulp.task('js', function () {
  return gulp.src([
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.min.js"
    ]).pipe(gulp.dest('js'))
});

gulp.task('default', function (callback) {
    runSequence(['css','fonts', 'js'], callback)
});
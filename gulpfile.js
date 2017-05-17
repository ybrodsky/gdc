var gulp = require('gulp'), del = require('del'), concat = require('gulp-concat');

gulp.task('js', function() {
  return gulp.src('./test.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist'))
});

gulp.task('clean', function(cb) {
  del(['dist'], cb())
});

gulp.task('watch', function() {
  gulp.watch('./test.js', ['js']);
});

gulp.task('default', ['clean'], function() {
  gulp.start('js', 'watch');
});
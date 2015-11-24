var gulp = require('gulp'),
    bs   = require('browser-sync').create(),
    sass = require('gulp-sass');

gulp.task('serve', ['sass'], function () {

  bs.init({ server: './' });

  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('./*.html').on('change', bs.reload);
});

gulp.task('sass', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css/'))
    .pipe(bs.stream());
});

gulp.task('default', ['serve']);

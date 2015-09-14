var gulp = require('gulp'),
    csso = require('gulp-csso'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    jade = require('jade');
    g_jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer')
    connect = require('gulp-connect');

gulp.task('sass', function() {
  gulp.src('sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(csso())
    .pipe(autoprefixer({
            browsers: ['> 1%'],
            cascade: false
        }))
    .pipe(gulp.dest('dist/css'));
})

/*
gulp.task('js', function() {

})
*/

gulp.task('jade', function () {
  return gulp.src(['*.jade'])
    .pipe(g_jade({
      jade: jade,
      pretty: true
    }))
    .pipe(gulp.dest('dist/'))
})

/*
gulp.task('connect', function() {

})
*/
gulp.task('watch',function() {
    gulp.watch('sass/*.scss',['sass']);
    gulp.watch('*.jade', ['jade'])
});

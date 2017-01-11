'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task("concatScripts", function(){
      gulp.src(['js/jquery.js',
                'js/fastclick.js',
                'js/foundation.js',
                'js/foundation.equalizer.js',
                'js/foundation.reveal.js',
                'js/foundation-call.js'])
            .pipe(concat("app.js"))
            .pipe(gulp.dest('js'));
});

gulp.task("minifyScripts", function(){
      gulp.src('js/app.js')
      .pipe(uglify())
      .pipe(rename('app.min.js'))
      .pipe(gulp.dest('js'));
});

var concatCss = require('gulp-concat-css');
 
gulp.task('default', function () {
  return gulp.src(['css/normalize.css',
                   'css/basics.css',
                   'css/menu.css',
                   'css/modals.css',
                   'css/foundation.min.css',
                   'css/photo-grid.css',
                   'css/hero.css',
                   'css/footer.css'])
    .pipe(concatCss("app.css"))
    .pipe(gulp.dest('css'));
});

var cleanCSS = require('gulp-clean-css');
 
gulp.task('minify-css', function() {
  return gulp.src('css/app.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css'));
});
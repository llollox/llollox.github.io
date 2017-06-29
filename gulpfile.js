var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var pug         = require('gulp-pug');
var stylus      = require('gulp-stylus');

gulp.task('serve', [], function() {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("stylus/*.styl", ['styles']);
    gulp.watch("templates/*.pug", ['html']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('styles', function () {
    return gulp.src('./stylus/main.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());
});

gulp.task('html', function(){
    return gulp.src('templates/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('./'))
});

gulp.task('default', [ 'serve' ]);

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var pug         = require('gulp-pug');
var stylus      = require('gulp-stylus');
var concat      = require('gulp-concat');

var paths       = {
    'assets': './assets',
    'bower' : './bower_components'
};

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

gulp.task('fonts', function() {
    return gulp.src([
            paths.assets + '/fonts/**.*',
            paths.bower  + '/font-awesome/fonts/**.*',
            paths.bower  + '/bootstrap/fonts/**.*'
        ])
        .pipe(gulp.dest('./public/fonts'));
});

gulp.task('scripts', function () {
    return gulp.src([
            paths.bower  + '/jquery/dist/jquery.js',
            paths.bower  + '/bootstrap/dist/js/bootstrap.js',
            paths.bower  + '/modernizr/modernizr.js',
            paths.bower  + '/waypoints/lib/jquery.waypoints.js',
            paths.assets + '/js/**.js'
        ])
        .pipe(concat('application.js'))
        .pipe(gulp.dest('./public/js'));
});


gulp.task('css_libraries', function () {
    return gulp.src([
        paths.bower  + '/bootstrap/dist/css/bootstrap.css',
        paths.bower  + '/font-awesome/css/font-awesome.css',
        paths.bower  + '/hover/css/hover.css',
        paths.assets + '/css/**.css'
    ])
    .pipe(concat({ path: 'css_libraries.css'}))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('assets', function () {
    return gulp.src([
        paths.bower  + '/rs-plugin/assets/**.png'
    ])
        .pipe(gulp.dest('./public/assets'));
});

gulp.task('images', function () {
    return gulp.src([
            paths.bower   + '/rs-plugin/images/**/*.*',
            paths.assets  + '/images/**/*.*'
        ])
        .pipe(gulp.dest('./public/images'));
});

gulp.task('styles', function () {
    return gulp.src('./stylus/main.styl')
        .pipe(stylus({
            // compress: true
        }))
        .pipe(concat('application.css'))
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.stream());
});

gulp.task('html', function(){
    return gulp.src('templates/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('./'))
});

gulp.task('default', [ 'serve' ]);

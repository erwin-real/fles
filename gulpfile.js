var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    uglifycss = require('gulp-uglifycss'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    sass = require('gulp-sass'),
    reload = browserSync.reload;

// Minify image
gulp.task('imageMin', () =>
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {

    gulp.src('node_modules/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest("dist/css"));

    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(uglifycss({
            "maxLineLen": 80,
            "uglyComments": true
        }))
        .pipe(rename("styles.min.css"))
        .pipe(gulp.dest("dist/css"))
        .pipe(reload({
            stream: true
        }));

});

// Move the javascript files into our /dist/js folder
gulp.task('js', function() {

    gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js')
        .pipe(gulp.dest("dist/js"));

    gulp.src('node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest("dist/js"));

    return gulp.src('src/js/script.js')
        .pipe(uglify())
        .pipe(rename('script.min.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(reload({
            stream: true
        }));

});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch(['src/js/*.js'], ['js']);
    gulp.watch(['src/scss/*.scss'], ['sass']);
    gulp.watch("index.html").on('change', browserSync.reload);
});

gulp.task('default', ['imageMin', 'js', 'serve']);

const dependencies = require('./source/dependencies');
const ngAnnotate = require('gulp-ng-annotate');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const gulp = require('gulp');
const del = require('del');

gulp.task('lib', () => {
    gulp.src(dependencies.css)
        .pipe(concat('./public/lib/lib.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('.'));

    gulp.src(dependencies.js)
        .pipe(concat('./public/lib/lib.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('.'));
});

gulp.task('js', () => {
    gulp.src(['./source/js/**/*.js'])
        .pipe(concat('./public/app/js/app.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('.'));
});

gulp.task('css', () => {
    gulp.src(['./source/css/**/*.css'])
        .pipe(concat('./public/app/css/app.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('.'));
});

gulp.task('watch', ['js', 'css'], () => {
    gulp.watch('./source/js/**/*.js', ['js']);
    gulp.watch('./source/css/**/*.css', ['css']);
});

gulp.task('clean', () => del([
    './public/lib/**/*',
    './public/app/js/app.min.js',
    './public/app/css/app.min.css'
]));
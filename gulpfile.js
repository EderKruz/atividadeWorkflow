var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var cssmin = require("gulp-cssmin");
var htmlmin = require('gulp-htmlmin');
var watch = require('gulp-watch');

gulp.task('compilar-css', function() {
    return gulp.src("./source/**/*.scss")
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(cssmin())
        .pipe(gulp.dest("./dist/css"))
});

gulp.task('escuta-me', function() {
    gulp.watch("./source/**/*.scss",["compilar-css"]);
    gulp.watch("./source/**/*.html",["compilar-html"]);
});

gulp.task('compilar-html', function() {
    return gulp.src("./source/**/*.html")
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("./dist"))
});
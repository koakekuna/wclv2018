const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task("sass", () => {
  return gulp
    .src("./style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./"));
});

gulp.task("sass:watch", () => {
  gulp.watch("./style.scss", ["sass"]);
});
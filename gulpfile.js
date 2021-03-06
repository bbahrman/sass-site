const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('styles', () => {
    return gulp.src('./sass/main.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', () => {
   gulp.watch('./sass/**/*.scss', ['styles']);
});

gulp.task('default', ['styles']);
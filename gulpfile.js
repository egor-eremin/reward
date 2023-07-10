const gulp = require('gulp');
const browserSync = require('browser-sync').create();

function browserSyncTask() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
}

function watchCssTask() {
    return gulp.src('./app/*.css')
        .pipe(browserSync.reload({ stream: true }));
}

function watchFiles() {
    gulp.watch('./app/*.css', gulp.series(watchCssTask));
    gulp.watch('./app/js/*.js').on('change', browserSync.reload);
    gulp.watch('./images/*').on('change', browserSync.reload);
    gulp.watch('./*.html').on('change', browserSync.reload);
}

// Default task
gulp.task('default', gulp.series(browserSyncTask, watchFiles));

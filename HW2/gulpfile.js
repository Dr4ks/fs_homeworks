var gulp = require('gulp')
var concat = require('gulp-concat')
var clean = require('gulp-clean')
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var sass = require('gulp-sass')(require('sass'));
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');





gulp.task('clear', () => {
    return gulp.src('dist/*', { read: false }).pipe(clean())
})

gulp.task('minifyCss', () => {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError)) 
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions', 'Firefox >= 60', 'Chrome >= 62', 'Safari >= 11', 'iOS >= 11', 'Edge >= 16'],
            cascade: false
        })) 
        .pipe(cleanCSS({ compatibility: 'ie8' })) 
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest('dist'))
})

gulp.task('minifyJs', () => {
    return gulp.src('src/js/*.js')
        .pipe(uglify()) 

        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest('dist'))

})

gulp.task('optimizeImages', () => {
    return gulp.src("src/img/*")
        .pipe(imagemin()) 
        .pipe(gulp.dest('dist/images'))
})


//build task is here
gulp.task('build', gulp.series(['clear', 'minifyCss', 'minifyJs', 'optimizeImages']))



gulp.task('startServer', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        index: 'index.html'
    })
    gulp.watch('src/scss/**/*.scss', gulp.series(['minifyCss'])).on('change', browserSync.reload);
    gulp.watch('src/js/**/*.js', gulp.series(['minifyJs'])).on('change', browserSync.reload);
    gulp.watch('src/img/*', gulp.series(['optimizeImages'])).on('change', browserSync.reload);
});


//dev task is here
gulp.task('dev', gulp.series(['build', 'startServer']))



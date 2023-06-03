const gulp = require('gulp')
const concat = require('gulp-concat')
const clean = require('gulp-clean')
const browserSync = require('browser-sync').create();
const uglify=require('gulp-uglify');
const sass=require('gulp-sass')(require('sass'))
const cleancss=require('gulp-clean-css');
const autoprefixer=require('gulp-autoprefixer');
const imagemin=require('gulp-imagemin');


gulp.task("compileSCSS",function(){
    return gulp.src("src/scss/*.scss")
    .pipe(sass().on('error',sass.logError)) //minifying and compiling
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions', 'Firefox >= 60', 'Chrome >= 62', 'Safari >= 11', 'iOS >= 11', 'Edge >= 16'],
        cascade: false
    }))   
    .pipe(cleancss({compatibility:'ie8'}))
    .pipe(concat("styles.min.css")) //concating
    .pipe(gulp.dest('dist/styles'))
});

gulp.task("compileJS",function(){
    return gulp.src("src/js/*.js")
    .pipe(uglify())  //minifying
    .pipe(concat("scripts.min.js")) //concating
    .pipe(gulp.dest('dist/scripts'))
});


//this is dev task
gulp.task("dev",function(){
    browserSync.init({
        server:{baseDir:'./'},index:'index.html'
    })
    gulp.watch("/src/scss/*.scss",gulp.series("compileSCSS")).on('change',browserSync.reload);
    gulp.watch("/src/js/*.js",gulp.series("compileJS")).on('change',browserSync.reload);
    gulp.watch('src/img/*', gulp.series(['optimg'])).on('change', browserSync.reload);
})

//cleaning dist folder
gulp.task('clean', function () {
    return gulp.src('dist/*', { read: false }).pipe(clean())
});



//remove unused css code
gulp.task('rmuncss',function(){
    return gulp.src('src/img/**/*')
    .pipe(uncss({
        html:['*.html']
    }))
    .pipe(gulp.dest('dist/styles'))
})

//optimize image
gulp.task('optimg', function () {
    return gulp.src('src/img/**/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/images'))
  });


//this is build task

gulp.task('build',gulp.series(['compileSCSS','compileJS','clean','rmuncss','optimg']))






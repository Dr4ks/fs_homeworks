const browserSync = require("browser-sync");
const gulp=require("gulp")
const sass=require('gulp-sass')(require('sass'));
const rimraf=require('gulp-rimraf');
const concat=require('gulp-concat')
const autoprefixer=require('gulp-autoprefixer');
const changed=require('gulp-changed');
const uglify=require('gulp-uglify');
const uncss=require('gulp-uncss')
const webp=require('gulp-webp')

gulp.task("compileSCSS",function(){
    return gulp.src("src/scss/*.scss")
    .pipe(sass().on('error',sass.logError)) //minifying and compiling
    .pipe(concat("styles.min.css")) //concating
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/styles'))
    .pipe(browserSync.stream());
});

gulp.task("compileJS",function(){
    return gulp.src("src/js/*.js")
    .pipe(uglify())  //minifying
    .pipe(concat("scripts.min.js")) //concating
    .pipe(gulp.dest('dist/scripts'))
    .pipe(browserSync.stream())
});


//this is dev task
gulp.task("dev",function(){
    gulp.watch("/src/scss/*.scss",gulp.series("compileSCSS"));
    gulp.watch("/src/js/*.js",gulp.series("compileJS"));
    gulp.watch("index.html").on('change',browserSync.reload);
})

//cleaning dist folder
gulp.task('clean', function () {
    return gulp.src('dist/**/*', { read: false, allowEmpty: true })
      .pipe(rimraf());
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
      .pipe(webp())
      .pipe(gulp.dest('dist/img'))
      .pipe(browserSync.stream());
  });


//this is build task

gulp.task('build',gulp.series('compileSCSS','compileJS','clean','rmuncss','optimg'))






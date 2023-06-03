Hello, I show you how I completed Homework2 for Full Stack Advanced Course.

Requirements of task and how I handle them


First of all, let's write all requirements and their answers for using Gulp.

1)Dev Task
1.Starting the server and tracking changes to *.js and *.scss files in the src folder.
2.Rebuilding and copying the concatenated and minified files styles.min.css and scripts.min.js to the dist folder and reloading your HTML page upon changes.

```javascript
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

```


2)Build Task
1.Clearing the dist folder.
2.Compiling SCSS files into CSS.
3.Adding vendor prefixes to CSS properties to support the latest versions of each browser.
4.Removing unused CSS code.
5.Concatenating all js files into one scripts.min.js file and minifying it.
6.Copying the minified final styles.min.css and scripts.min.js files to the dist folder.
7.Optimizing images and copying them to the dist/img folder.


```javascript
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

```


Reminder! Also the same thing I did for variables, typography,variables and colors in directory of abstract, From here you can all declaration specifically for **flexbox**.


4)Also I want to show you that main thing for HTML that I use JS code for burger menu. You can look at the code also on HTML, now I can provide you.

```javascript
const menu=document.getElementById('menu');
const navmenu=document.getElementById('menu-nav');

menu.addEventListener('click',function(){
    menu.classList.toggle('menu-active');
    navmenu.classList.toggle('active-menu-nav');
});
```

```javascript
const instahead=document.getElementById('insta-head');

window.addEventListener('resize',function(){
    if(window.innerWidth>=768){
        instahead.innerHTML='- Latest Instagram Shots';
    }
    else if(window.innerWidth<768){
        instahead.innerHTML='- Last Instagram Shots';
    }
});

```


5)Main part is here about the size of device. For that
You need to look at variables file that, I also mention here for specific devices including their sizes as **breakpoints**

```scss
$breakpoints: (
  sm: 20rem,   //this is for first one
  //320px
  md: 48rem,     //this is for second one
  // 768px
  lg: 64rem,
  // 1024px
  xl: 75rem,   //this is for third one
  // 1280px
);
```


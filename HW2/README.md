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

//dev task is combined tasks of compileing JS and SCSS into CSS
gulp.task("dev",function(){
    gulp.watch("/src/scss/*.scss",gulp.series("compileSCSS"));
    gulp.watch("/src/js/*.js",gulp.series("compileJS"));
    gulp.watch("index.html").on('change',browserSync.reload);
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

```


3)Another requirement is to design CSS by using preprocessors including SCSS or SASS, I used SCSS due to my comfort.
You can look at all mixins which I code for this project in _mixin.scss

Let's look at the some examples of them.

```scss
  //Main Part is here
@mixin pwhl($position,$width,$height,$left){   
    position: $position;
    width: $width;
    height: $height;
    left: $left;
}
@mixin bstbbbrd($box-sizing,$top,$background,$border,$border-radius){
    box-sizing: $box-sizing;
    top: $top;
    background: $background;
    border: $border;
    border-radius:$border-radius;
}
@mixin tp($top,$background){
    top:$top;
    background:$background;
}

@mixin setsforfont($top,$font-family,$font-style,$font-weight,$font-size,$line-height,$color){
  top: $top;
  font-family: $font-family;
  font-style: $font-style;
  font-weight: $font-weight;
  font-size: $font-size;
  line-height: $line-height;
  color: $color;
}
```


Reminder! Also the same thing I did for variables, typography,variables and colors in directory of abstract, From here you can all declaration specifically for **flexbox**.


4)Also I want to show you that main thing for HTML that I use JS code for burger menu. You can look at the code also on HTML, now I can provide you.


```javascript
    <script>
    const burger = document.querySelector('.top-menu')
        burger.addEventListener('click', function () {
            const menuIcon = document.querySelector('#menu-button')
            menuIcon.classList.toggle('fa-times')

            const dropMenu = document.querySelector('.dropdown')
            dropMenu.classList.toggle('active')
        })
</script>
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
  xl: 75rem,   //thi  s is for third one
  // 1280px
);
```


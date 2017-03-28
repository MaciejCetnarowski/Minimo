var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    // sass = require('gulp-ruby-sass'),
    plumber = require('gulp-plumber'),
    imagemin = require('gulp-imagemin');

gulp.task('default', function(){
  console.log('no siema działam :]');
});

gulp.task('imagemin',function(){
  gulp.src('img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('img-minimized'));
});

// gulp.task('sass',function(){
//     return sass('style.scss',{
//       style:'compressed'
//     })
//   .pipe(plumber())
//   .pipe(gulp.dest(''));
// });

gulp.task('uglify',function(){
  gulp.src('scripts.js').pipe(uglify()).pipe(gulp.dest('minjs'));
})

gulp.watch('style.scss',['sass']);

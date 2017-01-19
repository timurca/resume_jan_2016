var gulp = require ('gulp'),
	uglify = require('gulp-uglify'),
	conv_sass = require('gulp-ruby-sass'),
	sass = require('gulp-sass'),
	livereload = require('gulp-livereload'),
	imagemin = require('gulp-imagemin'),
	prefix = require('gulp-autoprefixer');


// Function to console.log Errors
function errorLog(error){
	console.error.bind(error);
	this.emit('end');
}


// Minify JS
gulp.task('scripts', function (){
	gulp.src('js/*.js')
		.on('error', errorLog)
		.pipe(uglify())
		.pipe(gulp.dest('build/js'));
});



// Sass to CSS + minify
gulp.task('conv_sass', function () {
  return conv_sass('scss/*.scss')
  	
  	.pipe(sass({ 
  		outputStyle: 'compressed'   // minify
  	 }))
    
    .on('error', errorLog)           // show errors

    .pipe(prefix('last 6 versions')) // prefix makes scss compatible to older browsers (eg last 6 versions)
    
    .pipe(gulp.dest('build/css'))     // write to css folder
    .pipe(livereload());
});

// Minify CSS


// Minify Images
gulp.task('imagemin', function (){
	gulp.src('images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('build/images'));
});


// Watch
gulp.task('watch', function(){

	var server = livereload();

	gulp.watch('js/*.js',['scripts']);
	gulp.watch('scss/*.scss',['conv_sass']);
	gulp.watch('imgs/*',['imagemin']);
});

// Run
gulp.task('default',['scripts','conv_sass','imagemin','watch']);

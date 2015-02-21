var gulp = require('gulp'); 
var webloc2png = require('gulp-webloc2png');
var watch = require('gulp-watch');
gulp.task("webloc2png",function(){
	gulp.src(['urls/*.webloc'])
		.pipe(webloc2png({
			width:780,
			height:500,
			dest:"screenShot"
		}))
});
gulp.task("default",function(){
	watch("urls/*.webloc",function(){
		gulp.start("webloc2png");
	});
});
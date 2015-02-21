var gulp = require('gulp'); 
var webloc2png = require('gulp-webloc2png');
gulp.task("webloc2png",function(){
	gulp.src(['urls/*.webloc'])
		.pipe(webloc2png({
			width:780,
			height:500,
			dest:"screenShot"
		}))
});
gulp.task("default",function(){
	gulp.watch("urls/*.webloc",["webloc2png"]);
});
var gulp = require('gulp'); 
var webloc2png = require('gulp-webloc2png');
var watch = require('gulp-watch');
gulp.task("webloc2png",function(){
	gulp.src(['urls/*.webloc'])
		.pipe(webloc2png({
			browserWidth:1280,
			browserHeight:720,
			clipWidth:1280,
			clipHeight:720,
			scale:1,
			dir:"screenShot"
		}))
});
gulp.task("default",function(){
	watch("urls/*.webloc",function(){
		gulp.start("webloc2png");
	});
});
var gulp = require('gulp'),
    open = require('gulp-open'),
    nodemon = require('gulp-nodemon');

gulp.task('default', function() {
	nodemon({ script: './bin/www' });
	gulp.src('./routes/v1/index.js').pipe(open('', { url: 'http://localhost:3000/api/v1' }));
});
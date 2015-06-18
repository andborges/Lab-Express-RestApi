var gulp = require('gulp'),
    open = require('gulp-open'),
    nodemon = require('gulp-nodemon'),
    mocha = require('gulp-mocha');

gulp.task('test', function() {
  gulp.src('test/*.js', { read: false }).pipe(mocha({ reporter: 'min' })).on("error", onError);
});

gulp.task('testing', ['test'], function() {
  testing = true;
  gulp.watch('test/*.js', ['test']);
});

gulp.task('default', function() {
	nodemon({ script: './bin/www' });
	gulp.src('./routes/v1/index.js').pipe(open('', { url: 'http://localhost:3000/api/v1' }));
});

var testing = false;

function onError(err) {
  if (testing) {
    this.emit('end');
  } else {
    process.exit(1);
  }
}
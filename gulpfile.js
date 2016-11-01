var documentation = require('./'),
  gulp = require('gulp');

gulp.task('documentation', ["documentation:md", "documentation:html", "documentation:json"]);

gulp.task('documentation:md', function () {

  return gulp.src('./index.js')
    .pipe(documentation({ format: 'md' }))
    .pipe(gulp.dest('md-documentation'));

});

gulp.task('documentation:html', function () {

  return gulp.src('./index.js')
    .pipe(documentation({ format: 'html' }))
    .pipe(gulp.dest('html-documentation'));

});

gulp.task('documentation:json', function () {

  return gulp.src('./index.js')
    .pipe(documentation({ format: 'json' }))
    .pipe(gulp.dest('json-documentation'));

});

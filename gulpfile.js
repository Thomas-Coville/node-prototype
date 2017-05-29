const gulp = require('gulp');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const path = require('path');

// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

gulp.task('ts-scripts', () => {
  var tsResult = tsProject
    .src()
    .pipe(sourcemaps.init())
    .pipe(tsProject());

  return tsResult.js
    .pipe(sourcemaps.write({
      // Return relative source map root directories per file.
      sourceRoot: function (file) {
        var sourceFile = path.join(file.cwd, file.sourceMap.file);
        return path.relative(path.dirname(sourceFile), file.cwd);
      }
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['ts-scripts'], () => {
  gulp.watch('src/**/*.ts', ['ts-scripts']);
});


gulp.task('default', ['watch']);

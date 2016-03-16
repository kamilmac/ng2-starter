var gulp = require('gulp'),
    rename = require('gulp-rename'),
    postcss = require('gulp-postcss'),
    cssnext = require('postcss-cssnext'),
    tslint = require("gulp-tslint");

gulp.task('watch:css', function() {
    return gulp.watch('app/**/*.post.css', function(obj) {
        if (obj.type === 'changed') {
            gulp.src(obj.path)
                .pipe(postcss([cssnext()]))
                .pipe(rename(function (path) {
                    path.basename = path.basename.replace('.post', '');
                }))
                .pipe(gulp.dest('app/'));
        }
    });
});

gulp.task("lint:ts", function() {
    gulp.src("app/**/*.ts")
        .pipe(tslint())
        .pipe(tslint.report('verbose', {
            emitError: false
        }));
});

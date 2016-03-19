var gulp = require('gulp'),
    postcss  = require('postcss'),
    cssnext = require('postcss-cssnext'),
    tslint = require("gulp-tslint"),
    replace = require("gulp-replace"),
    sourcemaps = require('gulp-sourcemaps'),
    typescript = require('gulp-typescript'),
    tscConfig = typescript.createProject('tsconfig.json'),
    re = /styles:\s?\[`([\s\S]*?)`\]/g;

function transpileInlineCss(_, match) {
    var processed = postcss([cssnext]).process(match);
    return "styles: [\`" + processed.css +"\`]"
}

gulp.task('process:ts', function(){
    return gulp.src("app/**/*.ts")
        .pipe(tslint())
        .pipe(tslint.report('verbose', {
            emitError: false
        }))
        .pipe(replace(re, transpileInlineCss))
        .pipe(sourcemaps.init())
        .pipe(typescript(tscConfig))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('app/'));
});

gulp.task('watch:ts', function(){
    gulp.watch('app/**/*.ts', ['process:ts']);
});

gulp.task('dev', ['process:ts', 'watch:ts']);

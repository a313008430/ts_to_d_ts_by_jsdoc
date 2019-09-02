const gulp = require('gulp');
const jsdoc = require('gulp-jsdoc3'),
    rollup = require('rollup'),
    ts = require('rollup-plugin-typescript2');


gulp.task('ts', () => {
    return rollup.rollup({
        input: './app/app.ts',
        plugins: [
            ts({
                tsconfig: './tsconfig.json'
            })
        ]
    }).then((bundle) => {
        return bundle.write({
            file:'./src/index.js',
            format:'iife',
            name:'Core',
            banner: `/** @namespace Core */ `
        })
    })
})

gulp.task('doc', function (cb) {
    var config = require('./jsdocConfig.json');
    return gulp.src(['./src/**/*.js'])
        .pipe(jsdoc(config, cb));
});

gulp.task('w', () => {
    gulp.watch('./app/**/*', gulp.parallel('ts'));
    gulp.watch('./src/**/*', gulp.parallel('doc'));
})
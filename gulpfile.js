'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    mocha = require('gulp-mocha'),
    istanbul = require('gulp-istanbul'),
    browserify = require('gulp-browserify'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['browserify', 'jshint', 'test']);

// JSHint task
gulp.task('jshint', function () {
    gulp.src(['gulpfile.js', './src/**/*.js', './test/specs/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

// Browserify (with sourcemaps) task
gulp.task('browserify', function () {
    gulp.src('./src/main.js', {
            read: false
        })
        .pipe(browserify({
            debug: true
        }))
        .pipe(gulp.dest('./js/'));
});

// Run unit tests
gulp.task('test', function (cb) {
    gulp.src(['./src/**/*.js'])
        .pipe(istanbul())
        .on('finish', function () {
            gulp.src(['./test/specs/**/*.js'])
                .pipe(mocha())
                .pipe(istanbul.writeReports())
                .on('end', cb);
        });
});

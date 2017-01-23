var gulp = require('gulp');
var babel = require('gulp-babel');
var webpack = require('gulp-webpack');
var zetzer = require('gulp-zetzer');
var browserSync = require('browser-sync').create();
var sassLint = require('gulp-sass-lint');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var pixrem = require('pixrem');
var colorRgbaFallback = require("postcss-color-rgba-fallback");
var opacity = require("postcss-opacity");
var uglify = require('gulp-uglify');
var pug = require('gulp-pug');
var gulpPugBeautify = require('gulp-pug-beautify');
var pump = require('pump');

var sassPath = 'src/styles/';
var htmlPath = 'src/html/';
var jsPath = 'src/js/';

// CSS tasks
gulp.task('sass', function(){
  return gulp.src(sassPath + '**/*.+(scss|sass)')
    .pipe(sassLint({
      configFile: './sass-lint.yml',
      files: { ignore: [
        sassPath + 'legacy/**/*.+(scss|sass)',
        sassPath + 'libs/_normalize.scss'
      ]}
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('postcss', ['sass'], function () {
  var processors = [
    autoprefixer({browsers: ['last 2 version', 'ie 8-9']}),
    pixrem(),
    colorRgbaFallback(),
    opacity(),
    cssnano({
      discardComments: {
        removeAll: true
      }
    }),
  ];
  return gulp.src('./dist/css/**/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.stream());
});

// JS tasks
gulp.task('webpack', function() {
    gulp.src('src/js/jsx/*.jsx')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/js/'))
    .pipe(browserSync.stream());
});

gulp.task('compress', function (cb) {
  pump([
      gulp.src('src/js/layout/**/*.js'),
      uglify(),
      gulp.dest('dist/Media/Default/js/layout/')
    ],
    cb
  )
  .pipe(browserSync.stream());
});

// HTML tasks
gulp.task('zetzer', function(){
  gulp.src([
    'src/html/*.html',
    'src/html/subscription/*.html',
    'src/html/test/*.html'
  ],
  {base: 'src/html/'})
  .pipe(zetzer({
    partials: htmlPath + 'partials',
    templates: htmlPath + 'templates',
    dot_template_settings: {
      strip: false
    },
    env: {
      root: '..',
      title: 'Static Legacy',
      description: 'Static build of the World Nomads front end'
    }
  }))
  .pipe(gulp.dest('dist'))
  .pipe(browserSync.stream());
});

gulp.task('pug', function() {
  gulp.src([
    'src/html/pug/*.pug'
  ],
  {base: 'src/html/'})
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulpPugBeautify({
    omit_empty_lines: true,
    fill_tab: false,
    tab_size: 4
  }))
  .pipe(gulp.dest('dist'))
  .pipe(browserSync.stream());
});

// Env. Tasks
gulp.task('browser-sync', function() {
    browserSync.init({
        port: 3030,
        server: {
            baseDir: './dist'
        }
    })
});

gulp.task('default', ['browser-sync', 'webpack', 'compress', 'postcss', 'zetzer', 'pug'], function() {
  gulp.watch(sassPath + '**/*.+(scss|sass)', ['postcss']);
  gulp.watch(jsPath + '**/*.jsx', ['webpack']);
  gulp.watch(htmlPath + '**/*.html', ['zetzer']);
  gulp.watch(htmlPath + '**/*.pug', ['pug']);
  gulp.watch(jsPath + '**/*.js', ['compress']);
});
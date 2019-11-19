"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var sassGlob = require("gulp-sass-glob");
sass.compiler = require("node-sass");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var csso = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var svgstore = require("gulp-svgstore");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var del = require("del");

gulp.task("del", function () {
  return del("build");
});

gulp.task("css", function () {
  return gulp
    .src("source/scss/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sassGlob())
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("images", function () {
  return gulp
    .src("source/img/**/*.{png,jpg,svg}")
    .pipe(
      imagemin([
        imagemin.optipng({ optimizationLevel: 3 }),
        imagemin.jpegtran({ optimizationLevel: 5, progressive: true }),
        //imagemin.svgo()
      ])
    )
    .pipe(gulp.dest("source/img"));
});

gulp.task("webp", function () {
  return gulp
    .src("build/img/**/*.{png,jpg}")
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest("build/img/"));
});

gulp.task("sprite", function () {
  return gulp
    .src("source/**/*.svg")
    .pipe(
      svgstore({
        inlineSvg: true
      })
    )
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
});

gulp.task("scripts:vendor", function () {
  return gulp
    .src("source/js/vendor/**/*.js")
    .pipe(plumber())
    .pipe(concat("vendor.js"))
    .pipe(gulp.dest("build/js"))
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(gulp.dest("build/js"));
});

gulp.task("scripts", function () {
  return gulp
    .src("source/js/modules/**/*.js")
    .pipe(plumber())
    .pipe(concat("main.js"))
    .pipe(gulp.dest("build/js"))
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(gulp.dest("build/js"));
});

gulp.task("html", function () {
  return gulp
    .src("source/*.html")
    .pipe(posthtml([include()]))
    .pipe(gulp.dest("build"));
});

gulp.task("copy", function () {
  return gulp
    .src(
      [
        "source/fonts/**",
        "source/img/**/*.{png,jpg,svg}",
        "source/js/**",
        "source/*.ico",
        "source/data/*.json"
      ],
      {
        base: "source"
      }
    )
    .pipe(gulp.dest("build"));
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.task(
  "build",
  gulp.series(
    "del",
    "copy",
    "webp",
    "images",
    "sprite",
    "css",
    "scripts:vendor",
    "scripts",
    "html"
  )
);

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp
    .watch("source/scss/**/*.scss", gulp.series("css"))
    .on("change", server.reload);
  gulp
    .watch("source/img/*.svg", gulp.series("sprite", "html"))
    .on("change", server.reload);
  gulp
    .watch("source/js/**/*.js", gulp.series("scripts", "scripts:vendor"))
    .on("change", server.reload);
  gulp.watch("source/**/*.html", gulp.series("html")).on("change", server.reload);
});

gulp.task("start", gulp.series("build", "server"));

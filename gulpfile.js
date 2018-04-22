const gulp = require('gulp');
const plumber = require('gulp-plumber');
const tinify = require('gulp-tinify');
const rename = require('gulp-rename');
const webp = require('gulp-webp');
const svgmin = require('gulp-svgmin');

gulp.task('tinify', () => {
    gulp.src(['./dist/images/**/*.png', './dist/images/**/*.jpg', './dist/images/**/*.jpeg'])
        .pipe(plumber())
        .pipe(tinify('JkJ1sNrqYoA5QpnwYlwwK_g74ths2UGk'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('webp', () => {
    gulp.src(['./dist/images/**/*.png', './dist/images/**/*.jpg', './dist/images/**/*.jpeg', '!./dist/images/favicons/*.png'])
        .pipe(plumber())
        .pipe(webp())
        .pipe(gulp.dest('./dist/images'));
});

gulp.task('svg', function () {
    return gulp.src(['./dist/images/**/*.svg'])
        .pipe(plumber())
        .pipe(svgmin())
        .pipe(gulp.dest('./dist/images'));
});

gulp.task('all', ['tinify', 'webp', 'svg']);

gulp.task('default', () => {
    console.log([
        '',
        '  \x1b[32;1mdefault\x1b[0m - Получение помощи',
        '',
        '  \x1b[32;1mtinify\x1b[0m - Минимизация картинок',
        '  \x1b[32;1msvg\x1b[0m - Минимизация svg',
        '  \x1b[32;1mwebp\x1b[0m - Создание webp из минимизированных картинок',
        '',
        '  \x1b[32;1mall\x1b[0m - Запуск всех комманд выше',
        '',
    ].join("\n"));
});

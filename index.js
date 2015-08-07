var gulp = require('gulp'),
    Elixir = require('laravel-elixir'),
    livereload = require('gulp-livereload'),
    config = Elixir.config;


Elixir.extend('livereload', function (src) {

    defaultSrc = [
        config.appPath + '/**/*',
        config.publicPath + '/**/*',
        'resources/views/**/*'
    ];

    src = src || defaultSrc;

    gulp.on('task_start', function (e) {
        if (e.task === 'watch') {
            gulp.watch(src)
                .on('change', function (event) {
                    livereload.changed(event.path);
                });

            livereload.listen();
        }
    });

});

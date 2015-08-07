var gulp = require('gulp'),
    Elixir = require('laravel-elixir'),
    livereload = require('gulp-livereload'),
    config = Elixir.config,
    GulpPaths = require('laravel-elixir').GulpPaths;
Task = Elixir.Task;


Elixir.extend('livereload', function (src) {

    defaultSrc = [
        'app/**/*',
        'public/**/*',
        'resources/views/**/*'
    ];

    src = src || defaultSrc;

    if (config.production === false) {
        var watcher = gulp.watch(src);

        watcher.on('change', function (event) {
            livereload.changed(event.path);
        })
    }

    livereload.listen();

});

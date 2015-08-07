var gulp = require('gulp'),
    elixir = require('laravel-elixir'),
    utilities = require('laravel-elixir/ingredients/commands/Utilities'),
    notifications = require('laravel-elixir/ingredients/commands/Notification'),
    livereload = require('gulp-livereload');

elixir.extend('livereload', function (src) {

    var config = this,
        defaultSrc = [
            'app/**/*',
            'public/**/*',
            'resources/views/**/*'
        ];


    src = src || defaultSrc;

    gulp.on('task_start', function (e) {
        if (e.task === 'watch') {
            livereload.listen();
            gulp.watch(src)
                .on('change', function (event) {
                    livereload.changed(event.path);
                });
        }
    });

    gulp.task('livereload', function () {});

    this.registerWatcher('livereload');
    return this.queueTask('livereload');

});

var gulp = require('gulp'),
    elixir = require('laravel-elixir'),
    utilities = require('laravel-elixir/ingredients/commands/Utilities'),
    notifications = require('laravel-elixir/ingredients/commands/Notification'),
    livereload = require('gulp-livereload');

elixir.extend('livereload', function(src) {

    var config = this,
        defaultSrc = [
            'app/**/*',
            'public/**/*',
            'resources/views/**/*'
        ];


    src = src || defaultSrc;

    livereload.listen();

    if (config.production === false) {
        var watcher = gulp.watch(src);

        watcher.on('change', function(event){
            livereload.changed(event.path);
        })

    }

    return this.queueTask('livereload');

});

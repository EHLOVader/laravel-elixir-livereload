var gulp = require('gulp'),
    elixir = require('laravel-elixir'),
    utilities = require('laravel-elixir/ingredients/commands/Utilities'),
    notifications = require('laravel-elixir/ingredients/commands/Notification'),
    livereload = require('gulp-livereload');

elixir.extend('livereload', function(src, output) {

    gulp.task('livereload', function() {
        livereload.listen();
        gulp.on('stop', function(){
            livereload();
        });
    });

    this.registerWatcher('livereload');

    return this.queueTask('livereload');

});

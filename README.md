# gulp-laravel-elixir-livereload
> laravel-elixir-livereload plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `laravel-elixir-livereload` as a development dependency:

```shell
npm install --save-dev gulp-laravel-elixir-livereload
```

Then, add it to your `gulpfile.js`:

```javascript
var laravel-elixir-livereload = require("laravel-elixir-livereload");

gulp.src("./src/*.ext")
	.pipe(laravel-elixir-livereload({
		msg: "Hello Gulp!"
	}))
	.pipe(gulp.dest("./dist"));
```

## API

### laravel-elixir-livereload(options)

#### options.msg
Type: `String`  
Default: `Hello World`

The message you wish to attach to file.


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/laravel-elixir-livereload
[npm-image]: https://badge.fury.io/js/laravel-elixir-livereload.png



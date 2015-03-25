# gulp-laravel-elixir-livereload
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> laravel-elixir-livereload plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-laravel-elixir-livereload` as a development dependency:

```shell
npm install --save-dev gulp-laravel-elixir-livereload
```

Then, add it to your `gulpfile.js`:

```javascript
var laravel-elixir-livereload = require("gulp-laravel-elixir-livereload");

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

[npm-url]: https://npmjs.org/package/gulp-laravel-elixir-livereload
[npm-image]: https://badge.fury.io/js/gulp-laravel-elixir-livereload.png

[travis-url]: http://travis-ci.org/ehlovader/gulp-laravel-elixir-livereload
[travis-image]: https://secure.travis-ci.org/ehlovader/gulp-laravel-elixir-livereload.png?branch=master

[coveralls-url]: https://coveralls.io/r/ehlovader/gulp-laravel-elixir-livereload
[coveralls-image]: https://coveralls.io/repos/ehlovader/gulp-laravel-elixir-livereload/badge.png

[depstat-url]: https://david-dm.org/ehlovader/gulp-laravel-elixir-livereload
[depstat-image]: https://david-dm.org/ehlovader/gulp-laravel-elixir-livereload.png

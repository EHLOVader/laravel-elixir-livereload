# gulp-laravel-elixir-livereload
> laravel-elixir-livereload plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `laravel-elixir-livereload` as a development dependency:

```shell
npm install --save-dev gulp-laravel-elixir-livereload
```

Then, add it to your `gulpfile.js`:

```javascript
var elixir = require('laravel-elixir');
require('laravel-elixir-livereload');

elixir(function (mix) {

    mix.livereload();

});
```

Live reload also uses a script file so add the following to your blade template.

```
	@if ( Config::get('app.debug') )
	<!-- build:remove(public,.) -->
	<script type="text/javascript">
		document.write('<script src="//localhost:35729/livereload.js?snipver=1" type="text/javascript"><\/script>')
	</script>
	<!-- endBuild -->
	@endif
```

## API

### laravel-elixir-livereload(src)

#### src
Type: `array` or `string`  
Default: `[
              'app/**/*',
              'public/**/*',
              'resources/views/**/*'
          ]`

The message you wish to attach to file.


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/laravel-elixir-livereload
[npm-image]: https://badge.fury.io/js/laravel-elixir-livereload.png



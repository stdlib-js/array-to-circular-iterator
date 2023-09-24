<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# circarray2iterator

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an iterator which repeatedly iterates over the elements of an array-like object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
circarray2iterator = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-circular-iterator@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/array-to-circular-iterator/tags). For example,

```javascript
circarray2iterator = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-circular-iterator@v0.1.0-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var circarray2iterator = require( 'path/to/vendor/umd/array-to-circular-iterator/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-to-circular-iterator@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.circarray2iterator;
})();
</script>
```

#### circarray2iterator( src\[, options]\[, mapFcn\[, thisArg]] )

Returns an iterator which repeatedly iterates over each element in an array-like `object`.

```javascript
var it = circarray2iterator( [ 1, 2, 3, 4 ] );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 2

v = it.next().value;
// returns 3

v = it.next().value;
// returns 4

v = it.next().value;
// returns 1

v = it.next().value;
// returns 2

v = it.next().value;
// returns 3

v = it.next().value;
// returns 4

// ...
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.

The function accepts the following `options`:

-   **iter**: number of iterations. Default: `1e308`.
-   **dir**: iteration direction. If set to `-1`, the iterator iterates over elements from right-to-left. Default: `1`.

To limit the number of iterations, set the `iter` option.

```javascript
var opts = {
    'iter': 5
};
var it = circarray2iterator( [ 1, 2, 3, 4 ], opts );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 2

v = it.next().value;
// returns 3

v = it.next().value;
// returns 4

v = it.next().value;
// returns 1

var bool = it.next().done;
// returns true
```

To iterate over elements from right to left, set the `dir` option to `-1`.

```javascript
var opts = {
    'dir': -1
};
var it = circarray2iterator( [ 1, 2, 3, 4 ], opts );
// returns <Object>

var v = it.next().value;
// returns 4

v = it.next().value;
// returns 3

v = it.next().value;
// returns 2

v = it.next().value;
// returns 1

v = it.next().value;
// returns 4

v = it.next().value;
// returns 3

// ...
```

To invoke a function for each `src` value, provide a callback function.

```javascript
function fcn( v ) {
    return v * 10.0;
}

var it = circarray2iterator( [ 1, 2, 3, 4 ], fcn );
// returns <Object>

var v = it.next().value;
// returns 10.0

v = it.next().value;
// returns 20.0

v = it.next().value;
// returns 30.0

// ...
```

The invoked function is provided four arguments:

-   **value**: iterated value.
-   **index**: iterated value index.
-   **n**: iteration count.
-   **src**: source array-like object.

```javascript
function fcn( v, i ) {
    return v * (i+1);
}

var it = circarray2iterator( [ 1, 2, 3, 4 ], fcn );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 4

v = it.next().value;
// returns 9

// ...
```

To set the callback function execution context, provide a `thisArg`.

```javascript
function fcn( v ) {
    this.count += 1;
    return v * 10.0;
}

var ctx = {
    'count': 0
};

var it = circarray2iterator( [ 1, 2, 3, 4 ], fcn, ctx );
// returns <Object>

var v = it.next().value;
// returns 10.0

v = it.next().value;
// returns 20.0

v = it.next().value;
// returns 30.0

var count = ctx.count;
// returns 3
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
-   If provided a generic `array`, the returned iterator does **not** ignore holes. To achieve greater performance for sparse arrays, use a custom iterator.
-   A returned iterator does **not** copy a provided array-like `object`. To ensure iterable reproducibility, copy a provided array-like `object` **before** creating an iterator. Otherwise, any changes to the contents of an array-like `object` will be reflected in the returned iterator.
-   In environments supporting `Symbol.iterator`, the function **explicitly** does **not** invoke an array's `@@iterator` method, regardless of whether this method is defined. To convert an array to an implementation defined iterator, invoke this method directly.
-   The returned iterator supports array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array-complex64`][@stdlib/array/complex64]).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-inmap@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-to-circular-iterator@umd/browser.js"></script>
<script type="text/javascript">
(function () {

function scale( v, i, n ) {
    return v * n;
}

// Create an array filled with random numbers:
var arr = inmap( new Float64Array( 10 ), randu );

// Create an iterator from the array which scales iterated values:
var opts = {
    'iter': arr.length * 10
};
var it = circarray2iterator( arr, opts, scale );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array-to-iterator`][@stdlib/array/to-iterator]</span><span class="delimiter">: </span><span class="description">create an iterator from an array-like object.</span>
-   <span class="package-name">[`@stdlib/array-to-strided-iterator`][@stdlib/array/to-strided-iterator]</span><span class="delimiter">: </span><span class="description">create an iterator from a strided array-like object.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-to-circular-iterator.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-to-circular-iterator

[test-image]: https://github.com/stdlib-js/array-to-circular-iterator/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/array-to-circular-iterator/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-to-circular-iterator/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-to-circular-iterator?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-to-circular-iterator.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-to-circular-iterator/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-to-circular-iterator/tree/deno
[umd-url]: https://github.com/stdlib-js/array-to-circular-iterator/tree/umd
[esm-url]: https://github.com/stdlib-js/array-to-circular-iterator/tree/esm
[branches-url]: https://github.com/stdlib-js/array-to-circular-iterator/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-to-circular-iterator/main/LICENSE

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64/tree/umd

<!-- <related-links> -->

[@stdlib/array/to-iterator]: https://github.com/stdlib-js/array-to-iterator/tree/umd

[@stdlib/array/to-strided-iterator]: https://github.com/stdlib-js/array-to-strided-iterator/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->

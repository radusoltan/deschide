const mix = require('laravel-mix');
require('dotenv').config();
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/site.js', 'public/js').react()
    .js('resources/js/admin.js', 'public/js').react()
    .js('resources/js/login.js', 'public/js').react()
    .sass('resources/sass/site.scss', 'public/css')
    .sass('resources/sass/admin.scss', 'public/css');

const mix = require('laravel-mix')
require('dotenv').config()


mix.js('resources/js/app.js', 'public/js')
    .sourceMaps().react()
    .sass('resources/sass/app.scss', 'public/css')

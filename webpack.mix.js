const mix = require('laravel-mix');

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


mix.js('resources/js/app.js', 'public/js').version()
    .scripts(['resources/js/BoxRefresh.js',
        'resources/js/BoxWidget.js',
        'resources/js/ControlSidebar.js',
        'resources/js/DirectChat.js',
        'resources/js/Layout.js',
        'resources/js/PushMenu.js',
        'resources/js/TodoList.js',
        'resources/js/Tree.js'], 'public/js/adminlte.min.js')
   // .less("resources/less/AdminLTE.less","public/css/AdminLTEv2.min.css")
   /* .less("resources/less/skins/_all-skins.less","public/css/skins/_all-skins.min.css")
    .less("resources/less/skins/skin-black.less","public/css/skins/skin-black.min.css")
    .less("resources/less/skins/skin-black-light.less","public/css/skins/skin-black-light.min.css")
    .less("resources/less/skins/skin-blue.less","public/css/skins/skin-blue.min.css")
    .less("resources/less/skins/skin-green.less","public/css/skins/skin-green.min.css")
    .less("resources/less/skins/skin-purple.less","public/css/skins/skin-purple.min.css")
    .less("resources/less/skins/skin-red.less","public/css/skins/skin-red.min.css")
    .less("resources/less/skins/skin-yellow.less","public/css/skins/skin-yellow.min.css")*/
    .sass('resources/sass/app.scss', 'public/css');

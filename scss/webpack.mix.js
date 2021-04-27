let mix = require('laravel-mix');

mix
	.sass('src/main.scss','css/')
	.js('src/main.js','js/')
	.setPublicPath('../')
	.disableSuccessNotifications();

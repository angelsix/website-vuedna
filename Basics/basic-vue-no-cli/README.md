Guide here https://www.freecodecamp.org/news/how-to-create-a-vue-js-app-using-single-file-components-without-the-cli-7e73e5b8244f/

Basically this allows you to use Vue in the normal way (importing View in main.js and using .Vue files and WebPack etc...) but without using the vue-cli-service binary that handles the building, publishing and serving of the website.

This is mainly to give you more of an understanding as to what happens during the build and serving process.

Basically, to build (create deployable compiled front-end website) we use WebPack. We configure it using webpack.config.js and use babel to convert ES6 (2015) and newer code to ES5 code. We use Vue Loader to convert .vue files to JavaScript and Css Loader to pull out the CSS from .vue files and add JavaScript code that will inject it into the HTML. Finally we use html-webpack-plugin to inject the .vue JavaScript (including the CSS code) bundled file into the head of HTML files.

By default, vue-cli-service does very similar and `vue-cli-service serve` starts a dev server based on webpack-dev-server https://cli.vuejs.org/guide/cli-service.html, and has a webpack configuration that uses babel, postcss, html-webpack-plugin and more to give all these features out of the box without the configuration needed.

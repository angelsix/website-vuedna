# Converting a static site to webpack/node.js

This is how to convert a static site (with basic html, css, js and assets) into a Webpack / Node.js website with the ability to use Scss, transpile modern JavaScript down to ES5, bundle all assets into a distribution output ready for deployment and have a Node server to run and test your code on.

## Folder Structure

Start by having a master folder with your static site in and create a new folder called `src` then move all your static files into it.

Open up a command window in the new master folder (that now only contains the `src` folder).

## Initialize Node package.json

Type `npm init -y` to create a node `package.json` file.

## Add Webpack

Type the following in the root folder where the `package.json` file was created.

```bash
npm i webpack -D
npm i webpack-cli -D
```

## Create Entry Point JavaScript file

Webpack needs an entry point JavaScript file to use to construct is dependency tree and figure out what to process. Create a file inside `src` called `index.js` and then create a `webpack.config.js` file in the root (above `src` folder)

```javascript
module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + "/dist"
  }
};
```

This will now look for `/src/index.js` when we run `webpack` and output the compiled result to `/dist/bundle.js`

## Test Output

Now in the root folder type `npx webpack` and this should create a new folder next to the `src` folder called `dist`. By default this will currently just process the `index.js` and any JavaScript files that are `import` into the `index.js` and compile/bundle them into a single JavaScript file into the `dist` folder called `bundle.js`

## Add Build NPM script

Edit the `package.json` file and inside the `scripts` section add one `"build": "webpack"` and now in command line in the root folder you can run `npm run build` to effectively run the `webpack` command.

## Process Scss/Css

Start by renaming your `.css` files in `src` to `.scss` files. 

To process Sass files type 

```bash
npm i sass-loader node-sass css-loader style-loader -D
```

The `node-sass` is the compiler that converts `scss` to `css`. 

The `style-loader` creates <style> nodes from JavaScript strings.

The `css-loader` compiles css files (so they can be compressed, nested etc...)

The `sass-loader` compiles Sass files to css using `node-sass`

Configure Webpack via a configuration file to add a test and use to capture `.scss` and `.css` files and process them through the loaders. Add `webpack.config.js` in the root folder like so

```javascript
module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
```

Finally import the style sheets in the `index.js` file so they can picked up and processed.

```javascript
import "./assets/style.scss";
console.log("I'm alive");
```

Now run `npm run build` and then check the command line output and it should show any `.scss` and `.css` as being processed.

```
webpack
Hash: 9d4d371c89bd28c13848
Version: webpack 4.41.1
Time: 500ms
Built at: 10/11/2019 4:24:46 PM
    Asset      Size  Chunks             Chunk Names
bundle.js  4.66 KiB       0  [emitted]  main
Entrypoint main = bundle.js
[0] ./src/app.js 60 bytes {0} [built]
[1] ./src/assets/style.scss 453 bytes {0} [built]
[2] ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style.scss 174 bytes {0} [built]
```

Now if you looked inside the output `bundle.js` file you would see the styles in the JavaScript file.

## Auto Vendor Prefixes

You can add PostCSS so your CSS gets any vendor prefixes automatically added so newer features that need browser vendor-specific versions get added for you.

```bash
npm i postcss-loader autoprefixer -D
```

Now add the postCSS loader to your Sass/Css rule in the `webpack.config.js` file

```javascript
// Sass and css files
{
  test: /\.(s*)css$/i,
  use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"]
},
```

Then create a `postcss.config.js` file like this to make postCSS use autoprefixer.

```javascript
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
```

## Process Images and Assets

To be able to handle images and other assets so when we reference them and use them in `src` they get copied to `dist` run the following.

```bash
npm i file-loader -D
```

Then in the `webpack.config.js` add the following rule to include images and fonts. Add any extension you need.

```javascript
{
  test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
  use: ["file-loader"]
}
```

Now whenever you reference any image or font from a `scss`, `css`, `js` or other file it will be detected and copied.

You can import it in JavaScript like this.

```javascript
 import Icon from './assets/image.png';
```

You can reference it in `css` or `scss` like you would a normal image. Perhaps like this.

```css
body {
  background: url("./image.jpg");
}
```

Where the `.scss` and image are in the same folder.

## Inline small files

To save on HTTP requests we can inline small content so it is directly inside the JavaScript bundle as data base64 encoded strings.

>  Remove the `file-loader` in the `webpack.config.js` as this loader will use it as a fallback if files are larger than the size limit, so there is no need to specify both.

Install the url loader.

```bash
npm i url-loader -D
```

Add this to the `webpack.config.js` rules section.

```javascript
{
  test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/i,
  use: [
    {
      loader: "url-loader",
      options: {
        limit: 8192 // 8kb
      }
    }
  ]
}
```

## Process JavaScript

We should transpile JavaScript down to ES2015 so that all browsers can understand it, while our source JavaScript can use the newest features and language. To do that we will use Babel.

```bash
npm i @babel/core @babel/preset-env babel-loader -D
```

Now update the `webpack.config.js` file and add a rules section

```javascript
{
  test: /\.js$/i,
  exclude: /node_modules/,
  loader: "babel-loader",
  options: {
    presets: ["@babel/preset-env"]
  }
}
```

## Minify JavaScript

Webpack 4 by default now minifies JavaScript so no need to do this.

## Clean Dist folder

It's good to clean the `dist` folder before re-building. 

```bash
npm i clean-webpack-plugin -D
```

Then add the following `require()` and entry to the plugin section

```javascript
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ title: "Output Management" })
  ],
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"]
      }
    ]
  }
};
```

Now every time you run `webpack` it will delete any old files from the `dist` folder.

## Favicon generation

Add an icon to your source folder, then in the `webpack.config.js` file in the plugins section for any `HtmlWebpackPlugin` add the `favicon` property

```javascript
    new HtmlWebpackPlugin({
      favicon: "./src/icon.png",
      ...
```

## Process HMTL

In order to process and output the HTML files in `src` we need to use the `HtmlWebpackPlugin`. 

```bash
npm i html-webpack-plugin -D
```

To use the plug-in add the `require()` and `plugins` section to the `webpack.config.js` file, and add the `entry` values if you want to split up the dependencies between pages as each entry JavaScript acts as a way to load in CSS files for the associates HTML file for example.

Also update the output now from the static name `bundle.js` to the specific entry point name and include a chunk hash so that every time you build the filename is different (this prevents caching issues).

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: "./src/index.js",
    about: "./src/about.js",
  },
  output: {
    filename: "[name].[chunkhash].js",
    path: __dirname + "/dist"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      chunks: ['about'],
      filename: 'about.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"]
      }
    ]
  }
};
```

Use a `HtmlWebpackPlugin` for each page.

> When the HTML is output it will get the bundled entry JavaScript file injected into the HTML, which will in turn then load and inject all the CSS and JavaScript files. The only thing left to reference is other assets such as images and fonts.

To add a reference to any other assets processed by webpack like normal in the HTML, install `html-loader` and any image `src` links will be replaced with the right path.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <img src="./assets/image.jpg"></img>
    <img src="./assets/small.gif"></img>
  </body>
</html>
```

```bash
npm i html-loader -D
```

In the `webpack.config.js` file add the following rile

```javascript
{
  test: /\.(html)$/,
  use: {
    loader: "html-loader",
    options: {
      interpolate: true,
      attrs: ["img:src", "link:href"]
    }
  }
}
```

This will change any img src links and link hrefs to the actual asset links, and with `interpolate` as true it allows you to include other HTML into your current HTML (like headers and footers) using this syntax in your HTML

```javascript
${require('./header.html')}
```

## Source Map for debugging

To allow easier debugging back to the original unbundled JavaScript files, add `devtool: 'inline-source-map'` to the `webpack.config.js` file. Now when you get an error the console log will show an error relative to the original unbundled files for easier debugging.

## Development Server

To test your website in a dev server use the Webpack Dev Server

```bash
npm i webpack-dev-server -D
```

Now add to your `package.json` file in the `scripts` section.

```json
"start": "webpack-dev-server --open"
```

Then you can run `npm start` to run the dev server. The open flag opens the browser automatically for you once it starts.

# Production Setup

There are several things you only want to do in your production build like Minify JS/CSS, and things you only want to do in development like source mapping.

## Splitting Webpack Config for Dev and Production

First install the merge tool.

```bash
npm i webpack-merge -D
```

Now create a new file `webpack.config.dev.js` and move the `devtool` property and the Scss/Css rule, and add the `mode` property that are specific to the development environment.

So we can also see during development where the file paths are, we can move the url loader rule over and add a `name` attribute setting it to the full path so its easier when debugging.

### webpack.config.dev.js

```javascript
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.js");

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      // Sass and css files
      {
        test: /\.(s*)css$/i,
        use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"]
      },
      // Inline content that is less than 8kb to data base64 strings
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[path][name].[ext]?hash=[hash:20]",
              limit: 8192 // 8kb
            }
          }
        ]
      }
    ]
  }
});
```

## Extracting CSS to files for Production

By default webpack inlines the CSS to JavaScript. Even though this can be convenient during development, its not good for production.

The current solution doesn't allow cache CSS. You can also get a Flash of Unstyled Content (FOUC). FOUC happens because the browser takes a while to load JavaScript and the styles would be applied only then. Separating CSS to a file of its own avoids the problem by letting the browser to manage it separately.

```bash
npm i mini-css-extract-plugin optimize-css-assets-webpack-plugin -D
```

Make another file for production just the same and this time copy the Scss/Css rule over from development and add in the `MiniCssExtractPlugin` code to extract the CSS to individual css files per entry point, and remove the `style-loader` as the `MiniCssExtractPlugin` will inject the output CSS locations into the HTML for us.

We add source-map output to production too to aid debugging issues in production via the source map files.

Don't forget to add the the url loader to the rules in production too.

### webpack.config.prod.js

```javascript
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      // Inline content that is less than 8kb to data base64 strings
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192 // 8kb
            }
          }
        ]
      },
      // Sass and css files
      {
        test: /\.(s*)css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require("cssnano"),
      cssProcessorOptions: {
        map: {
          inline: true
        },
        discardComments: {
          removeAll: true
        },
        discardUnused: true
      },
      canPrint: true
    })
  ]
});
```

Update your `package.json` file so the standard start command is using the development configuration, and add a build command that will run the production configuration.

```json
"scripts": {
  "start": "webpack-dev-server --config webpack.config.dev.js --open",
  "build": "webpack --config webpack.config.prod.js"
}
```

## Structuring Source folder better

We can better structure the source folder like this.

```
.
├── configuration
│   ├── postcss.config.js
│   ├── webpack.config.dev.js
│   ├── webpack.config.js
│   └── webpack.config.prod.js
├── package.json
└── src
    ├── about
    │   ├── about.html
    │   └── about.js
    ├── home
    │   ├── images
    │   │   └── homepage-splash.jpg
    │   ├── home.html
    │   ├── home.js
    │   └── scss
    │       └── home.scss
    └── shared
        ├── footer.html
        ├── header.html
        ├── images
        │   ├── icon.png
        │   ├── image.jpg
        │   └── small.gif
        ├── js
        │   └── shared.js
        └── scss
            └── shared.scss
```

The configuration files all go in a `configuration` folder. 

The `src` folder contains a folder per page of the application.

Inside each page folder is the page HTML itself, and the page JavaScript file. Then all other items go into sub folders for images, scss, javascript and other assets.

For shared assets, they follow the same structure but in a folder named `shared`.

> Remember to update your `package.json` to point to the new configuration file locations, your `webpack.config` files for all entry JavaScript and plugin configurations, as well as any other references in HTML, CSS and JavaScript
# Basic Webpack Setup for Static Site

The aim of this template is to allow you to use Webpack on your static simple website.

It allows you to use Sass, the latest JavaScript, HTML with templates (include headers/footers etc...) and to serve your static pages via a simple Express server so you have basic routing too.

## Benefits

The webpack is setup with

- Use Latest JavaScript (Babel)
- Write Styles in Sass (node-sass)
- Automatic css vendor prefix (autoprefixer)
- Inline small assets to base64 strings (url-loader)
- All assets bundled
- Development Server to preview and work (webpack-dev-server)

The production builds benefit from

- Minified JavaScript
- Minified CSS

## First Time Setup

````
npm install
````

## Build and run development server

```
npm start
```

## Preview for Production

When you want to publish for production and preview the server

```
npm run preview
```

## Publish for Production 

When you are ready to create the files to deploy to your live server.

```
npm run build
```

# Basic Project Structure & Workflow

For a more detailed explanation of the setup read [Readme-Detail](Readme-Detail.md). 

The basic idea is your source code and assets go into the `src` folder. 

You run `npm start` while developing to start a dev server and see changes live.

Once done you run `npm run preview` to build for production and start Express to see how your site will be before deploying, and then you can copy the `dist` folder to your server to deploy it, with the start command being `node express.js`.

## Adding a new page

When creating a new page, create a folder in `src` with the page name. Then create a HTML and JS file the same name as the page.

Any CSS files you want to use or JavaScript files instead of referencing them in the HTML, you instead use `import "somefile.css"` in your JavaScript file. For example

```
import "../shared/js/scroller.js";
import "../shared/scss/shared.scss";
```

When Webpack builds the project any `import` statements will be correctly added to the HTML file as <link> or <script> or other tags as needed so there is no need to add references manually to the HTML.

In the HTML page you can reference other HTML pages like headers and footers like this

```
${require('../shared/header.html')}

<h1>Welcome to Home</h1>

${require('../shared/footer.html')}
```

Now go to `./configuration/webpack.config.js` and add another `entry` and `HtmlWebpackPlugin()` for the new page so that it gets processed and output to the output folder.

```javascript
module.exports = {
  entry: {
    ...
    anotherPage: "./src/another-page/another-page.js"
  },
  ...
  plugins: [
    ..
    new HtmlWebpackPlugin({
      favicon: "./src/shared/images/icon.png",
      template: "./src/another-page/another-page.html",
      inject: true,
      chunks: ["anotherPage"],
      filename: "another-page.html"
    })
  ],
};
```

Finally, add the route for Express to find it to the `express.js` file.

```javascript
const express = require("express");
...

// Another Page
router.get("/anotherpage", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/another-page.html"));
});
```
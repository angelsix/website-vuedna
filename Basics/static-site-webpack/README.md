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


# Adding Scss processing to your static site

To add the ability to process SCSS files to CSS files in your website do the following. 

## Pre-requisites

You must have Node.js installed and NPM. Install Node.js Installer from https://nodejs.org/ and it will install both.

To use the `touch` command on Windows below (to create empty files) open a command line and type `npm install touch-cli -g` to install `touch` command globally.

## Install Node Sass globally

To use `node-sass` from command-line type `npm install node-sass -g`

## Creating Example Site

```
mkdir basic-scss
cd basic-scss

touch index.htm

mkdir assets
cd assets
touch style.scss
```

Now edit your `index.htm` file

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="assets/style.css" />
</head>
<body>
    
</body>
</html>
```

And create some styles in your `assets/style.scss` file

```
body
{
  background: black;
  color: blue;
}
```

## Compiling Scss to Css

To compile your `style.scss` file to `style.css` just run the following command from the `basic-scss` folder

```
node-sass -wr assets/ -o assets/
```

This will watch the folder `assets` and output the css files to the same folder with the same name as the scss file once any changes are detected.

To output the files to a different folder change the last parameter to the desired location.


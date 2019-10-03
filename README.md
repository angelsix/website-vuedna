# AngelSix Vue DnaGrid

This is a Vue component implementation of the DnaGrid for a nice grid system in Vue.js

## Prerequisites

1. Install Node.js from https://nodejs.org/en/download/
2. (Optional) In command line run `npm install -g live-server` to allow simple live server of static files from command line with `live-server .` in directory of the files

## Building the project

Go into `grid` folder. The `project.json` file contains the npm commands. Open command line in the folder and run the following.

## First build project dependencies install
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Deploying Live

Using render.com Create a Web Service for this repository, select `Node` environment with a build command of `cd grid && npm install && npm run build` and a start command of `cd grid && node index.js`
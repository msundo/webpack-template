[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Downloading Template

1. ```git clone https://github.com/AdditionDev/webpack-template.git <destination>```
2. ```git rm .git```
3. ```git init```
4. ```git remote add origin <url>```

then proceed to commit and push the copied repo

---
## Features

* [Webpack](https://webpack.js.org/)
* ES6 transpilation using [Babel](https://babeljs.io/)
* [Polyfills](/src/scripts/polyfills.js) for older browsers — [core-js](https://github.com/zloirock/core-js), [nodelist-foreach](https://github.com/imagitama/nodelist-foreach-polyfill) & [object-fit-images](https://github.com/bfred-it/object-fit-images)
* [Handlebars](http://handlebarsjs.com/) templating

## Getting Started
#### Pre-dependencies
Every command here should be executed in a [node](https://nodejs.org/en/) context and requires having the [yarn package manager](https://yarnpkg.com/en/) installed globally.
#### Start development
1. Install dependencies
```sh
yarn install
```
2. Start local webserver
```sh
yarn dev
```
That's it! 🙌

##  Build

To generate a production build, run the command:
```sh
yarn build
```
 — this will install the latest dependencies and build the project, minify scripts and stylesheets and [generally optimize](https://webpack.js.org/guides/production/) the solution for production.

The output folder is `./dist`.

The following scripts and stylesheets will be generated:
* `polyfills.js`
* `main.js`
* `main.css`

other assets, such as images, will be output to the `/assets` folder.

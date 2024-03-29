[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Downloading Template

1. **Clone this repository to a new folder**

    `git clone https://github.com/AdditionDev/webpack-template.git <destination> `

2. **Navigate to the newly cloned repository folder**
3. **Delete the existing `.git` folder**

3. **Re-initialize as a new repository**

    `git init`
4. **Add origin to github repo**

    `git remote add origin <url>`

---
## Features

* [Webpack](https://webpack.js.org/)
* ES6 transpilation using [Babel](https://babeljs.io/)
* [Polyfills](/src/scripts/polyfills.js) for older browsers — [core-js](https://github.com/zloirock/core-js), [nodelist-foreach](https://github.com/imagitama/nodelist-foreach-polyfill) & [object-fit-images](https://github.com/bfred-it/object-fit-images)
* SCSS compilation with [PostCSS](https://github.com/postcss/postcss) transforms for autoprefixing and automatic bug fixes.
* [Handlebars](http://handlebarsjs.com/) for templating

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

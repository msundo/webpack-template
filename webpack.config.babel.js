import path from 'path'
import fs from 'fs'
import { HotModuleReplacementPlugin, DefinePlugin } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlPlugin from 'html-webpack-plugin'
import VisualizerPlugin from 'webpack-visualizer-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import WorkboxPlugin from 'workbox-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'

const absolutePath = target => path.resolve(__dirname, target)
const src = absolutePath('./src')
const dist = absolutePath('./dist')

const pages = fs.readdirSync(src)
  .filter(file => file.endsWith('.hbs'))
  .map(page => page.replace('.hbs', ''))

const production = process.env.NODE_ENV === 'production'
const developmentPlugins = [ new HotModuleReplacementPlugin() ]
const productionPlugins = [
  new CleanWebpackPlugin([ dist ]),
  new WorkboxPlugin.GenerateSW({ swDest: './sw.js', globPatterns: ['**/*.{js,css}'], globIgnores: ['**/*.{png,jpg}'] })
]

export default {
  entry: {
    main: absolutePath('./src/scripts/index.js'),
    polyfills: absolutePath('./src/scripts/polyfills.js')
  },
  output: { path: dist },
  resolve: {
    extensions: ['.js'],
    modules: [ src, absolutePath('./node_modules') ]
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.scss$/, loader: 'import-glob-loader', enforce: 'pre' },
      { test: /\.(scss|css)$/,
        use: [
          production ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader?sourceMap!postcss-loader?sourceMap!sass-loader?sourceMap'
        ]
      },
      { test: /\.hbs$/, loader: 'handlebars-loader' }
    ]
  },
  plugins: [
    ...pages.map(page => new HtmlPlugin({ filename: `${page}.html`, template: `./src/${page}.hbs`, excludeChunks: ['polyfills'] })),
    new MiniCssExtractPlugin(),
    new DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) } }),
    new CopyPlugin([{ from: absolutePath('src/robots.txt'), to: dist }, { from: absolutePath('src/assets'), to: 'assets/images' }]),
    new VisualizerPlugin()
  ].concat(production ? productionPlugins : developmentPlugins)
}

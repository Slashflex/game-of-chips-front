const { resolve } = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

module.exports = {
    
    entry: resolve('./src/GameOfChips.js'),
    mode: process.env.NODE_ENV,
    watch: true,
    output: {
        path: resolve('./'),
        filename: './dist/bundle.min.js'
    },
    optimization: {
        concatenateModules: false,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: false,
                    keep_fnames: true,
                    keep_classnames: true,
                    // mangle: {
                    //     keep_fnames: true,
                    //     keep_classnames: true,
                    //     // properties: {
                    //     //     reserved: ['Foo', 'BaseModel']
                    //     // }
                    // }
                }
            })
        ]
    },
    node: {
        fs: 'empty'
    }
}
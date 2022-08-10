const path = require('path'); 
module.experts = {
    entry: './docs/main.js',
    output: {
        path: path.resolve(__dirname, 'docs'), 
        filename: 'main.js',
    }, 
    node: 'production',
    watch: true
};
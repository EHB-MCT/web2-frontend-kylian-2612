const path = require('path'); 
module.experts = {
    entry: {
        index: './docs/index.js'
    },    
    output: {
        path: path.resolve(__dirname, 'docs'), 
        filename: 'index.js'
    }, 
    node: 'production',
    watch: true
};
import path from 'path';

export default {
    "extraBabelPlugins": [
        ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }],
        ["module-resolver", {
            "alias": {
              "dva": "dva-react-router-3"
            }
        }],
    ],
    "theme": "./src/theme.js",
    "alias": {
        '@common': path.join(__dirname, 'src/common'),
    },
    "proxy": {
        "/saytodo": {
            "target": "http://localhost:8080",
            "changeOrigin": true
        }
    }
}

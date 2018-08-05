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
}

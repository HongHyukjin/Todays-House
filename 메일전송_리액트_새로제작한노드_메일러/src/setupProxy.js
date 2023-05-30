// setupProxy.js  파일이름

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (WrapComponent) => {

    WrapComponent.use(
        "/mail",
        createProxyMiddleware({
            target: "http://localhost:9000",
            changeOrigin: true,
        })
    )

    WrapComponent.use(
        "/jsp",
        createProxyMiddleware({
            "target":"http://localhost:8080",
            changeOrigin: true
        })
    )



}
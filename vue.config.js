module.exports = {
    assetsDir: '',
    publicPath: './',
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/qunar': {
                target: 'http://cangdu.org:8001',// 如果只有一级域名那么一定要写www要不然不能代理
                changeOrigin: true,
                pathRewrite: {
                    '^/qunar': ''
                }
            },
            '/flight': {
              target: 'https://flight.qunar.com',// 如果只有一级域名那么一定要写www要不然不能代理
              changeOrigin: true,
              pathRewrite: {
                  '^/flight': ''
              }
          },
            '/xiecheng': {
                target: 'https://m.ctrip.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/xiecheng': ''
                }
            }
        }
    }
};

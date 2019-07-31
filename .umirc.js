const routes = require('./src/routes');
const pageRouter = routes.routes;

const themes = require('./src/theme');
const theme = themes.theme;

// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'xiukid520',
      dll: true,
      locale: {
        enable: false,
        default: 'zh-CN',
      },

      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  routes: pageRouter,
  proxy: {
    '/api': {
      target: 'http://139.196.77.225',
      pathRewrite: { '^/api': '' },
      changeOrigin: true,
    },
  },
  theme: theme,
};

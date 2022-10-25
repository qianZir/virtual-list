// ref: https://umijs.org/config/
import { routes } from './routes/routes';
export default {
  treeShaking: true,
  publicPath: `./`,
  exportStatic: {
    htmlSuffix: true,
    dynamicRoot: true,
  },
  routes: routes,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: false,
        dva: false,
        dynamicImport: false,
        dll: false,
        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
};


// ref: https://umijs.org/config/

export default {
  treeShaking: true,
  publicPath: `./`,
  exportStatic: {
    htmlSuffix: true,
    dynamicRoot: true,
  },
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
      ]
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: false,
      dynamicImport: false,
      dll: false,
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],

}

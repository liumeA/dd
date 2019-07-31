// const login=require("./pages/user/Login")
exports.routes = [

  {
    path: '/', component: '../layouts/index.js',
    routes: [
      // { path: '/', redirect: '/login', exact: true },
      { path: '/', component: '../pages/index.js', exact: true },


    ],
  },
];

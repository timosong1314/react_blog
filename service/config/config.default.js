/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1592491371172_1403';

  // add your middleware config here
  config.middleware = [];

  //mysql
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '49.234.73.60',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'MYsql123.',
      // 数据库名
      database: 'react_blog',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: ['*']
  }

  config.cors = {
    orgin: 'http://localhost:3000',
    credentials: true,   //允许cookies可以跨域
    allowMethods: "GET,HEAD,PUT,DELETE,POST,PATCH,OPTIONS"
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};

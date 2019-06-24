export = (appInfo: any) => {
  const config: any = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1559636705909_6272';

  // add your config here
  config.middleware = [];

  // sequelize 
  config.sequelize = {
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      database: 'blog',
      username: 'admin',
      password: 'Wowcxy2008'
  };
  
  return config;
};

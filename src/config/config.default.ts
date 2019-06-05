export = (appInfo: any) => {
  const config: any = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1559636705909_6272';

  // add your config here
  config.middleware = [
  ];

  return config;
};

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            "@": "./src",
            // 添加你的路径别名映射
          },
          "extensions": [
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
          ]
        },
      ],
    ],
  };
};

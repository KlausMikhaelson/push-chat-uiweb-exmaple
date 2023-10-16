module.exports = function override(config, env) {
  config.resolve.alias = {
    ...config.resolve.alias,
  };
  config.resolve.fallback = {
    ...config.resolve.fallback,
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    zlib: require.resolve("browserify-zlib"),
    url: require.resolve("url/"),
    assert: require.resolve("assert/"),
    stream: require.resolve("stream-browserify"),
  };
  return config;
};
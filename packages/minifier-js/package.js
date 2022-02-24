Package.describe({
  summary: "JavaScript minifier",
  version: "2.7.3"
});

Npm.depends({
  esbuild: "0.14.23"
});

Package.onUse(function (api) {
  api.use('ecmascript');
  api.use('babel-compiler');
  api.mainModule('minifier.js', 'server');
  api.export('meteorJsMinify');
});

Package.onTest(function (api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('minifier-js');
  api.mainModule('minifier-tests.js', 'server');
});

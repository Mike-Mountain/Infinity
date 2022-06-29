const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

/**
 * We use the NX_TSCONFIG_PATH environment variable when using the @nrwl/angular:webpack-browser
 * builder as it will generate a temporary tsconfig file which contains any required remappings of
 * shared libraries.
 * A remapping will occur when a library is buildable, as webpack needs to know the location of the
 * built files for the buildable library.
 * This NX_TSCONFIG_PATH environment variable is set by the @nrwl/angular:webpack-browser and it contains
 * the location of the generated temporary tsconfig file.
 */
const tsConfigPath =
  process.env.NX_TSCONFIG_PATH ??
  path.join(__dirname, '../../tsconfig.base.json');

const workspaceRootPath = path.join(__dirname, '../../');
const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  tsConfigPath,
  [
    '@infinity/layout',
    '@infinity/data',
    '@infinity/schemas',
    '@infinity/config',
  ],
  workspaceRootPath
);

const share = mf.share;
mf.setInferVersion(true);
module.exports = {
  experiments: {
    outputModule: true,
  },
  output: {
    uniqueName: 'blog',
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
    minimize: true,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      library: {
        type: 'module',
      },
      name: 'blog',
      filename: 'remoteEntry.js',
      exposes: {
        './Module': 'apps/blog/src/app/remote-entry/entry.module.ts',
      },
      shared: share({
        '@angular/core': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '13.2.5',
        },
        '@angular/common': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '13.2.5',
        },
        '@angular/common/http': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '13.2.5',
        },
        '@angular/router': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '13.2.5',
        },
        '@angular/material': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '13.2.5',
        },
        '@datorama/akita': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '^7.1.1',
        },
        '@datorama/akita-ng-entity-service': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '^7.0.0',
        },
        '@datorama/akita-ng-router-store': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '^7.0.0',
        },
        ...sharedMappings.getDescriptors(),
      }),
    }),
    sharedMappings.getPlugin(),
  ],
};

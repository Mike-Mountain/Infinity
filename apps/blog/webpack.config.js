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
    '@infinity/navigation',
    '@infinity/layout',
    '@infinity/data/src/lib/stores/blog/blog.store',
    '@infinity/data/src/lib/stores/blog/blog.service',
    '@infinity/data/src/lib/stores/blog/blog.query',
  ],
  workspaceRootPath
);

module.exports = {
  output: {
    uniqueName: 'blog',
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
    minimize: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'blog',
      filename: 'remoteEntry.js',
      exposes: {
        './Module': 'apps/blog/src/app/remote-entry/entry.module.ts',
      },
      shared: {
        '@angular/core': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '^12.2.0',
        },
        '@angular/common': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '^12.2.0',
        },
        '@angular/common/http': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '^12.2.0',
        },
        '@angular/router': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '^12.2.0',
        },
        '@angular/material': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '^12.2.13',
        },
        '@datorama/akita': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '^6.2.4',
        },
        '@datorama/akita-ng-entity-service': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '^6.0.0',
        },
        '@datorama/akita-ng-router-store': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '^6.0.0',
        },
        ...sharedMappings.getDescriptors(),
      },
    }),
    sharedMappings.getPlugin(),
  ],
};

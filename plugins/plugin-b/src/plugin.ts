import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const pluginBPlugin = createPlugin({
  id: 'plugin-b',
  routes: {
    root: rootRouteRef,
  },
});

export const PluginBPage = pluginBPlugin.provide(
  createRoutableExtension({
    name: 'PluginBPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);

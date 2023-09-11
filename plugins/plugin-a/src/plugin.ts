import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const pluginAPlugin = createPlugin({
  id: 'plugin-a',
  routes: {
    root: rootRouteRef,
  },
});

export const PluginAPage = pluginAPlugin.provide(
  createRoutableExtension({
    name: 'PluginAPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);

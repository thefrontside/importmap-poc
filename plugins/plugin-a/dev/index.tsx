import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { pluginAPlugin, PluginAPage } from '../src/plugin';

createDevApp()
  .registerPlugin(pluginAPlugin)
  .addPage({
    element: <PluginAPage />,
    title: 'Root Page',
    path: '/plugin-a'
  })
  .render();

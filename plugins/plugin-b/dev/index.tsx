import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { pluginBPlugin, PluginBPage } from '../src/plugin';

createDevApp()
  .registerPlugin(pluginBPlugin)
  .addPage({
    element: <PluginBPage />,
    title: 'Root Page',
    path: '/plugin-b'
  })
  .render();

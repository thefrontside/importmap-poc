import { pluginAPlugin } from './plugin';

describe('plugin-a', () => {
  it('should export plugin', () => {
    expect(pluginAPlugin).toBeDefined();
  });
});

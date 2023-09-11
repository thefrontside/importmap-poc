import { pluginBPlugin } from './plugin';

describe('plugin-b', () => {
  it('should export plugin', () => {
    expect(pluginBPlugin).toBeDefined();
  });
});

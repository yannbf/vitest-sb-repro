import { defineWorkspace } from 'vitest/config';
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';

export default defineWorkspace([
  {
    extends: 'vite.config.ts',
    plugins: [storybookTest()],
    test: {
      name: 'storybook',
      browser: {
        enabled: true,
        provider: 'preview',
        instances: [
          {
            browser: 'chromium',
          },
        ],
      },
      setupFiles: ['./.storybook/vitest.setup.ts'],
    },
  },
]);

// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [preact()],
  env: {
    schema: {
      MAIL_USER: envField.string({
        context: 'server',
        access: 'secret'
      }),
      MAIL_PASS: envField.string({
        context: 'server',
        access: 'secret'
      }),
      MAIL_TO: envField.string({
        context: 'server',
        access: 'secret'
      })
    }
  }
});
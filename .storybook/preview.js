import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import '../src/assets/styles/variables.scss';
import '../src/assets/styles/custom.scss';

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
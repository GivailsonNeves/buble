import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import i18n from "../src/translations/i18n";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";

import '../src/assets/styles/fonts.scss';
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

const withI18n = (StoryFn) => (
  <I18nextProvider i18n={i18n}>
    {StoryFn()}
  </I18nextProvider>
)

const withRouterDom = (StoryFn) => (
  <BrowserRouter>
    {StoryFn()}
  </BrowserRouter>
)

export const decorators = [withRouterDom, withI18n];
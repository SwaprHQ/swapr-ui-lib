import type { Preview } from "@storybook/react";
import {
  withThemeByClassName,
  withThemeByDataAttribute,
} from "@storybook/addon-themes";

import "../src/global.css";

export const decorators = [
  /**
   * @see https://storybook.js.org/recipes/tailwindcss#3-add-a-theme-switcher-tool
   */
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-theme",
  }),
];

const preview: Preview = {
  parameters: {
    /**
     * @see https://storybook.js.org/docs/essentials/backgrounds
     */
    backgrounds: {
      default: "Light",
      values: [
        {
          name: "Light",
          value: "#F3F6F4",
        },
        {
          name: "Gray",
          value: "#E5E4E2",
        },
        {
          name: "Dark",
          value: "#36454F",
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

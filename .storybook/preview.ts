import type { Preview } from "@storybook/react";
import "../src/global.css";

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

import { createTheme, MantineColorsTuple } from "@mantine/core";

// カスタムカラーパレット
const primaryColor: MantineColorsTuple = [
  "#e7f5ff",
  "#d0ebff",
  "#a5d8ff",
  "#74c0fc",
  "#339af0",
  "#228be6",
  "#1c7ed6",
  "#1864ab",
  "#0b5394",
  "#164369",
];

export const mantineTheme = createTheme({
  primaryColor: "blue",
  colors: {
    primary: primaryColor,
  },
  fontFamily:
    "Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
  headings: {
    fontFamily:
      "Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
  },
  defaultRadius: "md",
  components: {
    Button: {
      defaultProps: {
        radius: "md",
      },
    },
    Card: {
      defaultProps: {
        radius: "md",
        shadow: "sm",
      },
    },
    Input: {
      defaultProps: {
        radius: "md",
      },
    },
  },
});

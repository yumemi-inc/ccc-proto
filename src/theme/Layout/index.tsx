import React, { type ReactNode, useEffect, useState } from "react";
import Layout from "@theme-original/Layout";
import type LayoutType from "@theme/Layout";
import type { WrapperProps } from "@docusaurus/types";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { mantineTheme } from "../mantine-theme";

// Mantineの必要なCSSをインポート
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/code-highlight/styles.css";

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): ReactNode {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // DocusaurusのHTMLのdata-theme属性を監視
    const updateColorScheme = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      setColorScheme(theme === "dark" ? "dark" : "light");
    };

    // 初期化
    updateColorScheme();

    // MutationObserverでdata-theme属性の変更を監視
    const observer = new MutationObserver(updateColorScheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <MantineProvider theme={mantineTheme} forceColorScheme={colorScheme}>
      <Notifications />
      <Layout {...props} />
    </MantineProvider>
  );
}

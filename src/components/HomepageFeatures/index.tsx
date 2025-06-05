import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Customコンポーネント",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Mantine
        UIの基本コンポーネントを拡張・カスタマイズした独自コンポーネント。
        デザインシステムの一貫性を保ちながら、特定の用途に特化した機能を提供します。
      </>
    ),
  },
  {
    title: "Blockコンポーネント",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        複数のMantineコンポーネントを組み合わせた実用的なUIパターン。
        よく使われるUIパターンをコンポーネント化して、開発効率を向上させます。
      </>
    ),
  },
  {
    title: "Mantine UIベース",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        すべてのコンポーネントはMantine UIをベースに構築。
        アクセシビリティ、TypeScript対応、美しいデザインを標準で提供します。
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

# Community Component Catalog

Mantine UIベースのコミュニティコンポーネントカタログです。デザインシステムを活用した実用的なコンポーネントのスニペットとライブデモを提供します。

## 🎯 概要

このプロジェクトは、Mantine UIデザインシステムを基盤として作られたコミュニティコンポーネントのカタログサイトです。以下の2種類のコンポーネントを提供しています：

- **Custom コンポーネント**: デザイントークンやガイドラインを用いて作成された独自コンポーネント
- **Block コンポーネント**: デザインシステムコンポーネントを組み合わせて作成された実用的なUIパターン

## 🚀 技術スタック

- **[Docusaurus 3.8.0](https://docusaurus.io/)** - ドキュメントサイト生成
- **[Mantine UI 8.0](https://mantine.dev/)** - デザインシステム
- **[TypeScript](https://www.typescriptlang.org/)** - 型安全性
- **[React 19](https://react.dev/)** - UIライブラリ
- **[MDX](https://mdxjs.com/)** - マークダウン + React

## 📦 収録コンポーネント

### Custom コンポーネント

| コンポーネント | 説明 | 特徴 |
|---|---|---|
| **AdvancedCombobox** | 検索履歴・お気に入り機能付きCombobox | 🔍 インクリメンタル検索<br/>⭐ お気に入り機能<br/>🕒 検索履歴 |
| **ProgressSteps** | ステップ表示付きProgress | 📊 視覚的進捗表示<br/>🎯 ステップ制御<br/>🎨 状態管理 |

### Block コンポーネント

| コンポーネント | 説明 | 構成要素 |
|---|---|---|
| **LoginForm** | 実用的なログインフォーム | TextInput + PasswordInput + Button + Alert |
| **UserCard** | プロフィール表示カード | Avatar + Text + Badge + ActionIcon + Menu |
| **SearchBox** | フィルタ機能付き検索ボックス | TextInput + Menu + Select + Badge |
| **NotificationBanner** | アクション付き通知バナー | Alert + Button + Transition |

## 🛠 セットアップ

### 前提条件

- Node.js 18.0 以上
- pnpm 8.0 以上

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/your-username/community-component-catalog.git
cd community-component-catalog

# 依存関係をインストール
pnpm install

# 開発サーバーを起動
pnpm start
```

### ビルド

```bash
# 本番用ビルド
pnpm build

# ローカルでビルド結果を確認
pnpm serve
```

## 📁 プロジェクト構造

```
community-component-catalog/
├── custom/                     # Custom コンポーネント
│   ├── intro.mdx              # Custom コンポーネント概要
│   ├── advanced-combobox.mdx  # AdvancedCombobox
│   └── progress-steps.mdx     # ProgressSteps
├── block/                      # Block コンポーネント
│   ├── intro.mdx              # Block コンポーネント概要
│   ├── login-form.mdx         # LoginForm
│   ├── user-card.mdx          # UserCard
│   ├── search-box.mdx         # SearchBox
│   └── notification-banner.mdx # NotificationBanner
├── src/
│   ├── components/            # 共通コンポーネント
│   ├── theme/                 # Mantine テーマ設定
│   │   ├── mantine-theme.ts   # カスタムテーマ
│   │   └── Layout/            # レイアウトコンポーネント
│   └── css/                   # カスタムスタイル
├── static/                    # 静的ファイル
├── docusaurus.config.ts       # Docusaurus 設定
└── sidebars.ts                # サイドバー設定
```

## 🎨 Mantine UI 統合

このプロジェクトでは、Mantine UIとDocusaurusの完全な統合を実現しています：

### 主要な統合機能

- **MantineProvider** による全体テーマ管理
- **ダークモード対応** (Docusaurusと連携)
- **カスタムテーマ** による統一感のあるデザイン
- **MDXでのMantineコンポーネント** 使用

### 使用パッケージ

```json
{
  "@mantine/core": "^8.0.2",
  "@mantine/hooks": "^8.0.2", 
  "@mantine/form": "^8.0.2",
  "@mantine/code-highlight": "^8.0.2",
  "@mantine/notifications": "^8.0.2",
  "@tabler/icons-react": "^3.34.0"
}
```

## 📚 コンポーネントページ構成

各コンポーネントページには以下の情報が含まれています：

1. **概要** - コンポーネントの説明と用途
2. **ライブデモ** - 実際に動作するコンポーネント
3. **実装コード** - TypeScript + Mantine UI
4. **プロパティ** - 利用可能なpropsと設定
5. **使用方法** - 基本的な使用例とカスタマイズ例
6. **特徴** - コンポーネントの主要機能
7. **バリエーション** - 異なる用途での使用例

## 🔧 カスタマイズ

### 新しいコンポーネントの追加

1. 適切なディレクトリ (`custom/` または `block/`) にMDXファイルを作成
2. フロントマターで `sidebar_position` を設定
3. ライブデモ、実装コード、使用例を含める
4. サイドバーは自動生成されます

### テーマのカスタマイズ

`src/theme/mantine-theme.ts` でMantineテーマをカスタマイズできます：

```tsx
export const mantineTheme = createTheme({
  primaryColor: 'blue',
  colors: {
    primary: primaryColor,
  },
  fontFamily: 'Inter, system-ui, sans-serif',
  // ...
});
```

## 🤝 コントリビューション

新しいコンポーネントの提案や改善案を歓迎します！

### コントリビューションの流れ

1. このリポジトリをフォーク
2. 新しいブランチを作成 (`git checkout -b feature/amazing-component`)
3. 変更をコミット (`git commit -m 'Add amazing component'`)
4. ブランチにプッシュ (`git push origin feature/amazing-component`)
5. プルリクエストを作成

### コンポーネント作成ガイドライン

- **実用性**: 実際のプロジェクトで使用できるレベルの品質
- **再利用性**: 様々なシーンで活用できる汎用性
- **アクセシビリティ**: WCAG準拠のアクセシブルな実装
- **ドキュメント**: 充実した使用例とプロパティ説明

## 📄 ライセンス

このプロジェクトは [MIT License](LICENSE) の下で公開されています。

## 🔗 リンク

- **ライブサイト**: [https://your-site.example.com](https://your-site.example.com)
- **Mantine UI**: [https://mantine.dev](https://mantine.dev)
- **Docusaurus**: [https://docusaurus.io](https://docusaurus.io)

---

**Community Component Catalog** - Mantine UIベースの実用的なコンポーネントスニペット集

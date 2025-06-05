# Docusaurusでコミュニティコンポーネント公開サイト構築タスク

## 概要
現在のblog/tutorial構成を変更して、CustomコンポーネントとBlockコンポーネントのスニペット公開サイトに変更する。
デザインシステムとしてMantine UIを導入し、コンポーネントの実装とスニペット公開を行う。

## メインタスク

### 1. Mantine UI導入
- [x] 必要パッケージのインストール（@mantine/core, @mantine/hooks, @mantine/form など）
- [x] DocusaurusでMantine UIを使用するための設定
- [x] MantineProviderの設定
- [x] Mantineテーマのカスタマイズ設定
- [x] MDXでMantineコンポーネントを使用できるグローバル設定

### 2. ナビゲーション構造の変更
- [x] `docusaurus.config.ts`のnavbarをCustom/Blockに変更
- [x] フッターリンクも対応して更新

### 3. サイドバー設定の変更
- [x] `sidebars.ts`でtutorialSidebarを削除
- [x] customSidebarとblockSidebarを新規作成
- [x] 自動生成設定を適用

### 4. ディレクトリ構造の作成
- [x] `custom/`ディレクトリを作成（独自コンポーネント用）
- [x] `block/`ディレクトリを作成（Block コンポーネント用）
- [x] `blog/`ディレクトリを削除（不要）
- [x] `docs/`ディレクトリを削除（tutorialが不要のため）

### 5. MDXコンポーネント対応設定
- [x] MDXプラグインの確認・設定調整
- [x] カスタムコンポーネント用のグローバルスコープ設定
- [ ] コードスニペット表示用のコンポーネント作成（Mantineベース）

### 6. Mantineベースのテンプレート作成
- [x] `custom/`用のMDXテンプレート作成
  - コンポーネント説明（Mantine Textコンポーネント使用）
  - Mantineベースの実装例
  - スニペット表示（Code/Prismコンポーネント）
  - 使用方法デモ
- [x] `block/`用のMDXテンプレート作成
  - Block コンポーネント説明
  - Mantineコンポーネントの組み合わせ例
  - 実装スニペット

### 7. Mantineベースのサンプルコンテンツ作成
- [ ] Customコンポーネントのサンプル（例：Mantine Comboboxのカスタマイズ）
- [ ] Blockコンポーネントのサンプル（例：Mantine Input + Button のフォーム）

### 8. スタイリング調整
- [x] MantineテーマとDocusaurusテーマの統合
- [x] カスタムCSS調整（コンポーネント表示用）
- [ ] スニペット表示の見た目改善（Mantine CodeHighlight使用）
- [x] レスポンシブ対応確認

### 9. 機能拡張（オプション）
- [ ] 検索機能の設定・カスタマイズ
- [ ] タグ機能でコンポーネント分類（Mantine Badge使用）
- [ ] コピーボタン付きコードブロック（Mantine ActionIcon使用）
- [ ] ライブプレビュー機能（Mantine Modal/Drawer活用）

## 詳細設定項目

### Mantine UI設定
- 必要パッケージ:
  - `@mantine/core` - コアコンポーネント
  - `@mantine/hooks` - カスタムフック
  - `@mantine/form` - フォーム管理
  - `@mantine/code-highlight` - コードハイライト
  - `@mantine/notifications` - 通知
- swizzleが必要なコンポーネント: Root, Layout
- テーマ設定: カラースキーム、フォント、スペーシング

### docusaurus.config.ts変更点
- preset-classic の docs 設定を複数に分割
- navbar items を Custom/Block に変更
- title、taglineを適切に更新
- plugins配列にMantine用設定追加

### 新規ディレクトリ構成
```
/
├── custom/           # 独自コンポーネント
│   ├── intro.mdx
│   ├── combobox/
│   └── ...
├── block/            # Blockコンポーネント  
│   ├── intro.mdx
│   ├── form-components/
│   └── ...
└── src/
    ├── components/   # 共通コンポーネント
    ├── theme/        # Mantineテーマ設定
    └── css/          # カスタムスタイル
```

### MDX機能要件
- [ ] Mantineコンポーネントのインポート・表示
- [ ] インタラクティブなコンポーネントデモ
- [ ] Mantine CodeHighlightでsyntax highlighting
- [ ] Mantineベースのコピー機能付きスニペット表示

## 実装優先度

### Phase 1: 基本構造 + Mantine導入 ✅ **完了**
1. [x] Mantine UIパッケージインストール
2. [x] Mantine基本設定（Provider、テーマ）
3. [x] ディレクトリ作成・削除
4. [x] docusaurus.config.ts修正
5. [x] sidebars.ts修正

### Phase 2: Mantineベースコンテンツ作成 🚧 **進行中**
1. [x] 各セクションのintro.mdx作成（Mantineコンポーネント使用）
2. [ ] Mantineベースサンプルコンポーネント1つずつ作成

### Phase 3: 機能拡張・最適化
1. [ ] Mantineカスタムコンポーネント作成
2. [ ] テーマ統合・スタイリング調整
3. [ ] UX改善（Mantine機能活用）

## コンポーネントサンプル案

### Customコンポーネント（独自コンポーネント）

#### 基本レベル
- **AdvancedCombobox** - Mantine Comboboxに検索履歴・お気に入り機能追加
- **ColorPalettePicker** - カラーパレット選択UI（ColorPickerの拡張）
- **ProgressSteps** - ステップ表示付きProgressコンポーネント
- **AnimatedButton** - ホバー・クリックアニメーション強化Button
- **RichTextInput** - Mantine TextInputにリアルタイムバリデーション追加

#### 中級レベル
- **DataTable** - Mantine Tableベースの高機能データテーブル
  - ソート、フィルタ、ページネーション
  - 行選択、一括操作
  - 列の表示/非表示切り替え
- **FileUploadZone** - ドラッグ&ドロップ対応ファイルアップロード
  - プレビュー機能
  - 進捗表示
  - 複数ファイル対応
- **CodeEditor** - シンタックスハイライト付きコードエディタ
  - テーマ切り替え
  - 行番号表示
  - コピーボタン

#### 上級レベル
- **KanbanBoard** - ドラッグ&ドロップ対応かんばんボード
- **ChartWidget** - インタラクティブなチャート表示
- **CalendarScheduler** - 予定管理カレンダー

### Blockコンポーネント（組み合わせコンポーネント）

#### 基本レベル
- **LoginForm** - TextInput + PasswordInput + Button + Checkbox
- **SearchBox** - TextInput + ActionIcon + Menu（フィルタ機能）
- **UserCard** - Avatar + Text + Badge + Group（プロフィール表示）
- **NotificationBanner** - Alert + CloseButton + ActionIcon
- **FilterGroup** - MultiSelect + DatePicker + NumberInput + Button

#### 中級レベル
- **ProfileEditForm** - 複数のInput + FileInput + Switch + Button群
  - バリデーション
  - 画像プレビュー
  - 変更検知
- **DataFilterPanel** - Select + DatePicker + Checkbox群 + Range Slider
  - 条件保存機能
  - リセット機能
  - プリセット機能
- **CommentSection** - Textarea + Button + Timeline + Menu
  - 返信機能
  - いいね機能
  - 削除・編集機能

#### 上級レベル
- **DashboardLayout** - Grid + Card + Navbar + Aside + Header
- **MultiStepForm** - Stepper + 各種Input + Progress + Button群
- **DataVisualization** - Select + DatePicker + Chart + Table組み合わせ

### 実装サンプルの選定基準

#### 優先度高（Phase 2で実装）
1. **AdvancedCombobox** - Customの代表例
2. **LoginForm** - Blockの代表例
3. **UserCard** - 見た目がわかりやすい
4. **SearchBox** - よく使われるパターン

#### 優先度中（Phase 3で実装）
1. **DataTable** - 実用性が高い
2. **ProfileEditForm** - 複雑なフォーム例
3. **FileUploadZone** - インタラクティブ要素
4. **FilterGroup** - 組み合わせパターン

#### デモ用特徴
- **インタラクティブ性**: 実際に操作できる
- **見た目の美しさ**: Mantineの良さが伝わる
- **実用性**: 実際のプロジェクトで使える
- **学習価値**: 実装パターンが参考になる
- **コード量**: スニペットとして適切な長さ

### 各サンプルの構成
- **概要**: コンポーネントの説明と用途
- **ライブデモ**: 実際に動作するコンポーネント
- **実装コード**: TypeScript + Mantine
- **使用方法**: props、カスタマイズ例
- **関連コンポーネント**: 組み合わせ提案

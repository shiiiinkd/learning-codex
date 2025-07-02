# Lesson 4-2: React Router によるページ遷移

## シナリオ
Home と About の 2 ページを持つ簡単なアプリを作成し、リンクで画面を切り替えます。

## 学習目標
- `BrowserRouter` の基本構造
- `Link` と `Routes` の使い方

## 手順
1. **5 行目**にソリューション参照用の import を追加します。
   ```ts
   import { App as Solution } from './Component.solution'
   ```
2. **8 行目**`Step 1` で `BrowserRouter` を配置し、`Step 2` で `Link` と `Routes` を実装します。
3. `npm test` を実行し、About リンクをクリックしてページが切り替わるか確認します。
4. `src/Component.hint.tsx` にルーター構成の例があります。

### ヒント
- [React Router](https://reactrouter.com/en/main)

```
App
└─ BrowserRouter
   ├─ nav(Link)
   └─ Routes
```

## テスト実行方法
```bash
npm install
npm test
```

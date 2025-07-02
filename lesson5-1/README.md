# Lesson 5-1: Snap-Map 風ミニアプリの骨格

## シナリオ
これまで学んだ技術を組み合わせて簡易的な地図アプリの骨格を作ります。

## 学習目標
- 状態管理とルーティングの統合
- コンポーネント設計のまとめ

## 手順
1. **3 行目**に以下を追記してソリューションを参照します。
   ```ts
   import { SnapMapApp as Solution } from './Component.solution'
   ```
2. **8 行目以降**の `SnapMapApp` 関数内でコメント `Step 1` 〜 `Step 3` に従い、
   Theme Provider と BrowserRouter をネストして `<Solution />` を返します。
3. `npm test` を実行し、以下の機能がパスすることを確認します。
   - マウント時に API をフェッチしてリストを表示する
   - テーマ切り替えボタンでタイトルが更新される
4. 実装に迷ったら `src/Component.hint.tsx` を参照してください。

### ヒント
- [React Router ドキュメント](https://reactrouter.com/)
- [Context API](https://react.dev/reference/react/createContext)

```
SnapMapApp
└─ ThemeProvider
   └─ BrowserRouter
      ├─ nav
      └─ Routes
          ├─ Home
          └─ Map
```

## テスト実行方法
```bash
npm install
npm test
```

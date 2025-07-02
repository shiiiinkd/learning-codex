# Lesson 5-2: 永続化とルーティングを統合

## シナリオ
前章までの機能を組み合わせ、追加ボタンでリストを増やし、その状態を `localStorage` に保存するアプリを完成させます。

## 学習目標
- Context と Reducer を利用したグローバルステート
- `useEffect` を使った永続化処理
- React Router の統合

## 手順
1. **5 行目**にソリューション参照用の import を追加します。
   ```ts
   import { App as Solution } from './Component.solution'
   ```
2. **24 行目**`Step 1` で `state.items` を `localStorage` に保存してください。
3. `npm test` を実行し、Add ボタンが表示されるテストが通ることを確認します。
4. 詳細な構造は `src/Component.hint.tsx` を参照してください。

### ヒント
- [useReducer](https://react.dev/reference/react/useReducer)
- [React Router ドキュメント](https://reactrouter.com/)

```
App
└─ Provider
   └─ BrowserRouter
      └─ Home (Add button & list)
```

## テスト実行方法
```bash
npm install
npm test
```

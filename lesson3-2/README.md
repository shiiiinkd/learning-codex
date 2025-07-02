# Lesson 3-2: フェッチとローディング状態

## シナリオ
コンポーネントのマウント時に外部 API からデータを取得し、取得中は "Loading..." を表示します。

## 学習目標
- `useEffect` の依存配列
- 非同期処理の完了後に state を更新

## 手順
1. **4 行目**にソリューション参照の import を追加します。
   ```ts
   import { DataLoader as Solution } from './Component.solution'
   ```
2. **8 行目**`Step 1` で `loading` と `data` のステートを用意し、`Step 2` で `fetch` を実行して結果を保存します。
3. `npm test` を実行し、ローディング表示が消えてデータが表示されるか確認します。
4. 実装がわからない場合は `src/Component.hint.tsx` を参照してください。

### ヒント
- [Fetching data](https://react.dev/learn/synchronizing-with-effects)

```
DataLoader
├─ Loading...
└─ data.title
```

## テスト実行方法
```bash
npm install
npm test
```

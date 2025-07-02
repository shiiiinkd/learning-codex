# Lesson 1-1: 関数コンポーネントと Props

## シナリオ
`Hello` コンポーネントを作り、受け取った文字列を画面に表示します。

## 学習目標
- 関数コンポーネントの定義
- Props の型定義と受け渡し

## 手順
1. **4 行目**にソリューション参照用の import を追加します。
   ```ts
   import { Hello as Solution } from './Component.solution'
   ```
2. **11 行目**の `Step 1` で `message` を取り出し、
   `Step 2` で `<div>{message}</div>` を返します。
3. `npm test` で「メッセージ表示」テストが通ることを確認します。
4. 詰まったら `src/Component.hint.tsx` を参照してください。

### ヒント
- [React.FC 型定義](https://react.dev/reference/react/FC)

```
Hello
└─ <div>message</div>
```

## テスト実行方法
```bash
npm install
npm test
```

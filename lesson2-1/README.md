# Lesson 2-1: useState でカウンター

## シナリオ
ボタンを押す度に数字が増える簡単なカウンターを作ります。

## 学習目標
- `useState` フックによる状態管理
- イベントでの状態更新

## 手順
1. **4 行目**にソリューション参照の import を追加します。
   ```ts
   import { Counter as Solution } from './Component.solution'
   ```
2. **8 行目**`Step 1` で `count` ステートを定義し、`Step 2` でボタン押下時に `+1` します。
3. `npm test` を実行し、カウントが増えることを確認します。
4. 実装に迷ったときは `src/Component.hint.tsx` を参照してください。

### ヒント
- [useState](https://react.dev/reference/react/useState)

```
Counter
└─ <button>+1</button>
```

## テスト実行方法
```bash
npm install
npm test
```

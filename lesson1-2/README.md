# Lesson 1-2: JSX とイベントハンドリング

## シナリオ
ボタンを押すと親コンポーネントのハンドラが呼ばれるシンプルな例を作ります。

## 学習目標
- JSX 内でのイベント指定
- イベントハンドラの型定義

## 手順
1. **4 行目**にソリューション参照の import を追加します。
   ```ts
   import { EventButton as Solution } from './Component.solution'
   ```
2. **10 行目**`Step 1` にクリックハンドラ `handleClick` を実装し、`onClick()` を呼びます。
3. `npm test` を実行し、ハンドラが呼ばれるテストが成功することを確認します。
4. `src/Component.hint.tsx` に例があるので参考にしてください。

### ヒント
- [React イベント処理](https://react.dev/learn/responding-to-events)

```
EventButton
└─ <button>Click</button>
```

## テスト実行方法
```bash
npm install
npm test
```

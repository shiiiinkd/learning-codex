# Lesson 2-3: フォームの双方向バインディング

## シナリオ
入力ボックスに文字を入力すると、下のプレビューにも同じ文字が表示されるようにします。

## 学習目標
- 入力イベントをトリガーに state を更新
- state から表示をレンダリング

## 手順
1. **4 行目**に参考用の import を追加します。
   ```ts
   import { TwoWayForm as Solution } from './Component.solution'
   ```
2. **11 行目**`Step 1` で入力値を取得し、`Step 2` で `setText` を呼び出します。
3. `npm test` でプレビューが更新されるテストを確認します。
4. 迷ったときは `src/Component.hint.tsx` を参照してください。

### ヒント
- [フォーム入力の管理](https://react.dev/learn/forms)

```
TwoWayForm
├─ input
└─ preview(text)
```

## テスト実行方法
```bash
npm install
npm test
```

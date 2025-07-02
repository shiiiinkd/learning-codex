# Lesson 2-2: フォーム入力と双方向バインディング

## シナリオ
入力フィールドの値を state と同期させる基本パターンを学びます。

## 学習目標
- フォーム要素の制御コンポーネント化
- 入力イベントでの状態更新

## 手順
1. **4 行目**にソリューション参照用 import を追加します。
   ```ts
   import { ControlledInput as Solution } from './Component.solution'
   ```
2. **8 行目**`Step 1` で `value` ステートを定義し、`Step 2` で `onChange` 内で `setValue` を実行します。
3. `npm test` を実行し、タイプした内容が input に表示されるか確認します。
4. `src/Component.hint.tsx` に実装例を掲載しています。

### ヒント
- [フォーム入力の制御](https://react.dev/learn/forms)

```
ControlledInput
└─ <input value={value} ... />
```

## テスト実行方法
```bash
npm install
npm test
```

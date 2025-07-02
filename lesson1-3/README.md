# Lesson 1-3: 型付きフォーム入力と基本バリデーション

## シナリオ
入力値の長さをチェックし、3文字未満ならエラーを表示するフォームを作成します。

## 学習目標
- `useState` を用いたフォーム状態管理
- 入力値に応じた簡易バリデーション

## 手順
1. **4 行目**にソリューション参照用の import を追加します。
   ```ts
   import { ValidatedInput as Solution } from './Component.solution'
   ```
2. **11 行目**の `Step 1` で入力値を更新し、`Step 2` で長さチェックを行います。
3. `npm test` を実行し、短い入力でエラーが表示されるテストを確認します。
4. `src/Component.hint.tsx` も参考にしてください。

### ヒント
- [フォームとイベント](https://react.dev/learn/choosing-the-state-structure)

```
ValidatedInput
├─ input value
└─ error message (optional)
```

## テスト実行方法
```bash
npm install
npm test
```

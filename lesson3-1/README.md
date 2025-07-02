# Lesson 3-1: useEffect で document.title 更新

## シナリオ
ボタンを押してカウントを増やすと、ブラウザのタイトルが更新される仕組みを実装します。

## 学習目標
- `useEffect` の基本形
- 副作用としての DOM 操作

## 手順
1. **4 行目**に参考用ソリューションの import を追加します。
   ```ts
   import { TitleEffect as Solution } from './Component.solution'
   ```
2. **8 行目**`Step 1` で `count` ステートを作成し、`Step 2` の `useEffect` で `document.title` を更新します。
3. `npm test` を実行し、ボタンクリックでタイトルが更新されるか確認します。
4. `src/Component.hint.tsx` を見れば完成例のコードを確認できます。

### ヒント
- [useEffect](https://react.dev/reference/react/useEffect)

```
TitleEffect
└─ <button>{count}</button>
```

## テスト実行方法
```bash
npm install
npm test
```

# Lesson 4-3: useReducer + Context でグローバルステート

## シナリオ
複数コンポーネントから共有できるカウンターを実装します。

## 学習目標
- `useReducer` による状態遷移
- Context を通じたグローバル値の共有

## 手順
1. **3 行目**にソリューション参照用の import を追加します。
   ```ts
   import { Provider as SolutionProvider, Counter as SolutionCounter } from './Component.solution'
   ```
2. **21 行目**の `Step 1` で Provider を設定し、
   **33 行目**の `Step 2` `Step 3` で dispatch を呼び出すボタンを実装します。
3. `npm test` を実行し、+/- ボタンでカウントが変わるテストを確認します。
4. `src/Component.hint.tsx` に完成例の簡易版があります。

### ヒント
- [useReducer](https://react.dev/reference/react/useReducer)
- [Context](https://react.dev/reference/react/useContext)

```
Provider
└─ Counter (+ / -)
```

## テスト実行方法
```bash
npm install
npm test
```

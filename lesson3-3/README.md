# Lesson 3-3: setInterval を使ったタイマー

## シナリオ
コンポーネントがマウントされたら 1 秒おきに数値が増えていくタイマーを実装します。

## 学習目標
- `useEffect` のクリーンアップ処理
- `setInterval` を用いた副作用の制御

## 手順
1. **4 行目**にソリューション参照用の import を追加します。
   ```ts
   import { Timer as Solution } from './Component.solution'
   ```
2. **11 行目**`Step 1` で `setInterval` を設定し、`Step 2` でクリーンアップ関数を返します。
3. `npm test` で 2 秒後にカウントが 2 になるテストが通ることを確認します。
4. 迷ったら `src/Component.hint.tsx` を参照してください。

### ヒント
- [Effects with cleanup](https://react.dev/learn/synchronizing-with-effects#step-2-write-the-cleanup-function)

```
Timer
└─ <span>{count}</span>
```

## テスト実行方法
```bash
npm install
npm test
```

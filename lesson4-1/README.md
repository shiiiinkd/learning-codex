# Lesson 4-1: Context API によるテーマ切り替え

## シナリオ
ボタンを押すとアプリ全体のテーマが切り替わる機能を作ります。

## 学習目標
- Context の作成と Provider の利用
- Consumer からの値取得

## 手順
1. **4 行目**にソリューション参照の import を追加します。
   ```ts
   import { ThemeProvider as SolutionProvider, ThemeSwitcher as SolutionSwitcher } from './Component.solution'
   ```
2. **11 行目**`Step 1` と `Step 2` で Provider の実装を行い、
   **15 行目**`Step 3` で Context を使ってボタンのクリックでテーマを切り替えます。
3. `npm test` を実行し、ボタン押下でテーマ文字列が変わるか確認します。
4. `src/Component.hint.tsx` を参考に実装してください。

### ヒント
- [Context API](https://react.dev/reference/react/createContext)

```
ThemeProvider
└─ ThemeSwitcher
```

## テスト実行方法
```bash
npm install
npm test
```

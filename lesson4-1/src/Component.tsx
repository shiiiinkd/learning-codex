// 難易度: 7/10
// 学習目標: Context を利用したテーマ切り替え
import React, { createContext, useContext } from 'react'
// Step0: ソリューション参照用インポート
import { ThemeProvider as SolutionProvider, ThemeSwitcher as SolutionSwitcher } from './Component.solution'

export const ThemeContext = createContext<{theme: string, toggle: () => void}>({
  theme: 'light',
  toggle: () => {}
})

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  // Step 1: theme state と toggle 関数を定義
  // Step 2: Provider で値を渡す
  /* TODO: 上記を実装 */
}

export const ThemeSwitcher: React.FC = () => {
  // Step 3: Context から値を取得しボタンで切り替え
  /* TODO: 実装 */
}

// 完成イメージ: ボタンを押すとテーマ値が切り替わる

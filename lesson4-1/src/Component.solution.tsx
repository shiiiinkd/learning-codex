// 難易度: 7/10
// 学習目標: Context を利用したテーマ切り替え
import React, { createContext, useContext, useState } from 'react'
// Context + useState によるテーマ切り替え例

export const ThemeContext = createContext<{theme: string, toggle: () => void}>({
  theme: 'light',
  toggle: () => {}
})

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const toggle = () => setTheme(theme === 'light' ? 'dark' : 'light')
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const ThemeSwitcher: React.FC = () => {
  const { theme, toggle } = useContext(ThemeContext)
  return <button onClick={toggle}>{theme}</button>
}

import React, { createContext, useState, useContext } from 'react'

export const ThemeContext = createContext({ theme: 'light', toggle: () => {} })

export const HintProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const toggle = () => setTheme(t => t === 'light' ? 'dark' : 'light')
  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
}

export const HintSwitcher = () => {
  const { theme, toggle } = useContext(ThemeContext)
  return <button onClick={toggle}>{theme}</button>
}

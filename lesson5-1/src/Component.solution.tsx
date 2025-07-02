// 難易度: 9/10
// 学習目標: これまでの要素を組み合わせたアプリ骨格を作る
import React, { createContext, useContext, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// 完成済み例: Context + Router を組み合わせたアプリ
const ThemeContext = createContext<{theme: string, toggle: () => void}>({
  theme: 'light',
  toggle: () => {}
})

const ThemeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const toggle = () => setTheme(theme === 'light' ? 'dark' : 'light')
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<{ id: number; title: string }[]>([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((res) => res.json())
      .then(setPosts)
  }, [])
  return (
    <ul>
      {posts.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  )
}

const Map: React.FC = () => {
  const { theme, toggle } = useContext(ThemeContext)
  return <button onClick={toggle}>theme: {theme}</button>
}

// Router と Provider をネストした完成形
export const SnapMapApp: React.FC = () => (
  <ThemeProvider>
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/map">Map</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
)

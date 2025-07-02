// 難易度: 8/10
// 学習目標: React Router でページ遷移を行う
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// 2ページを行き来する最小構成の Router 例

const Home = () => <div>Home</div>
const About = () => <div>About</div>

export const App: React.FC = () => (
  <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
)

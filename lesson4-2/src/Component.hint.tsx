import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export const Hint = () => (
  <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/about" element={<div>About</div>} />
    </Routes>
  </BrowserRouter>
)

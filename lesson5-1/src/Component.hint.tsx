import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'

// このファイルは実装のヒントです。ThemeProvider と Router を
// ネストした構造の例を示しています。
export const Hint = () => (
  <ThemeProvider>
    <BrowserRouter>
      {/* ここに Link や Routes を配置する */}
    </BrowserRouter>
  </ThemeProvider>
)

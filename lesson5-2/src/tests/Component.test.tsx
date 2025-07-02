// テスト対象: 永続化とルーティングを含むアプリ骨格
import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from '../Component'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  BrowserRouter: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}))

// テストケース: 初期描画で Add ボタンが表示される
test('renders add button', () => {
  render(<App />)
  expect(screen.getByText('Add')).toBeInTheDocument()
})

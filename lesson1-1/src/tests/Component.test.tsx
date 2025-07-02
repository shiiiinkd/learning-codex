// テスト対象: Props で渡したメッセージが描画されるか
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Hello } from '../Component'

// テストケース: 文字列が DOM に表示される
test('renders message', () => {
  render(<Hello message="test" />)
  expect(screen.getByText('test')).toBeInTheDocument()
})

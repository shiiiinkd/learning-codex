// テスト対象: 入力とプレビューの同期
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { TwoWayForm } from '../Component'

// テストケース: 入力値が即座に表示に反映される
test('updates preview on input', () => {
  render(<TwoWayForm />)
  const input = screen.getByRole('textbox')
  fireEvent.change(input, { target: { value: 'hello' } })
  expect(screen.getByTestId('preview')).toHaveTextContent('hello')
})

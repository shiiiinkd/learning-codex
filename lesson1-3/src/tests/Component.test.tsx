// テスト対象: フォーム入力に対するバリデーション表示
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ValidatedInput } from '../Component'

// テストケース: 3文字未満でエラーを表示
test('shows error when input is short', () => {
  render(<ValidatedInput />)
  const input = screen.getByRole('textbox')
  fireEvent.change(input, { target: { value: 'ab' } })
  expect(screen.getByRole('alert')).toHaveTextContent('3文字以上')
})

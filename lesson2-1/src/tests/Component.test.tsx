// テスト対象: useState によるカウントアップ
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Counter } from '../Component'

// テストケース: ボタンクリックで数値が増える
test('increments count', async () => {
  const user = userEvent.setup()
  render(<Counter />)
  await user.click(screen.getByText('+1'))
  expect(screen.getByText('1')).toBeInTheDocument()
})

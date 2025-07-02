// テスト対象: 入力値の更新が state に反映されるか
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ControlledInput } from '../Component'

// テストケース: type した文字が input に表示される
test('updates value on change', async () => {
  const user = userEvent.setup()
  render(<ControlledInput />)
  const input = screen.getByRole('textbox')
  await user.type(input, 'hello')
  expect((input as HTMLInputElement).value).toBe('hello')
})

// テスト対象: ボタンクリックでハンドラが呼ばれるか
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { EventButton } from '../Component'

// テストケース: クリックイベント伝搬
test('calls click handler', async () => {
  const user = userEvent.setup()
  const handler = jest.fn()
  render(<EventButton onClick={handler} />)
  await user.click(screen.getByText('Click'))
  expect(handler).toHaveBeenCalled()
})

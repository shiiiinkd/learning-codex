// テスト対象: useEffect による document.title 更新
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TitleEffect } from '../Component'

// テストケース: ボタンクリックで title が変わる
test('updates document title', async () => {
  const user = userEvent.setup()
  render(<TitleEffect />)
  await user.click(screen.getByRole('button'))
  expect(document.title).toBe('count: 1')
})

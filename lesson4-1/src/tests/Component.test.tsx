// テスト対象: Context を用いたテーマ切り替え
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider, ThemeSwitcher } from '../Component'

// テストケース: クリックでテーマ文字列が変わる
test('toggles theme', async () => {
  const user = userEvent.setup()
  render(
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  )
  const button = screen.getByRole('button')
  await user.click(button)
  expect(button).toHaveTextContent('dark')
})

// テスト対象: React Router のページ遷移
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { App } from '../Component'

// テストケース: リンククリックで About ページへ遷移
test('navigates between pages', async () => {
  const user = userEvent.setup()
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )
  await user.click(screen.getByText('About'))
  expect(screen.getByText('About')).toBeInTheDocument()
})

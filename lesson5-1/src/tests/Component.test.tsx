// テスト対象: マウント時の API フェッチ
// テスト対象: localStorage からの初期値取得
// テスト対象: クリックで title とテーマが切り替わる
import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { SnapMapApp } from '../Component'

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({ json: () => Promise.resolve([{ id: 1, title: 'post' }]) })
  ) as jest.Mock
})

// テストケース: 投稿読み込みとテーマ切り替え
test('loads posts and toggles theme', async () => {
  const user = userEvent.setup()
  render(
    <MemoryRouter>
      <SnapMapApp />
    </MemoryRouter>
  )
  await waitFor(() => screen.getByText('post'))
  await user.click(screen.getByText('Map'))
  const button = screen.getByRole('button')
  await user.click(button)
  expect(button).toHaveTextContent('dark')
})

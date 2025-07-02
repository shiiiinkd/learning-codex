// テスト対象: 非同期フェッチとローディング表示
import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { DataLoader } from '../Component'

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({ json: () => Promise.resolve({ title: 'test' }) })
  ) as jest.Mock
})

// テストケース: フェッチ完了後にデータが描画される
test('displays fetched data', async () => {
  render(<DataLoader />)
  expect(screen.getByText('Loading...')).toBeInTheDocument()
  await waitFor(() => screen.getByText('test'))
})

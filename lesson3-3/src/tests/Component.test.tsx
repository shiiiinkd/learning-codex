// テスト対象: タイマーが一定間隔で count を更新するか
import React from 'react'
import { render, screen, act } from '@testing-library/react'
import { Timer } from '../Component'

jest.useFakeTimers()

// テストケース: advanceTimersByTime でカウント確認
test('increments count over time', () => {
  render(<Timer />)
  act(() => {
    jest.advanceTimersByTime(2000)
  })
  expect(screen.getByText('2')).toBeInTheDocument()
})

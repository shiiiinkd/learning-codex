// テスト対象: useReducer + Context による状態管理
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider, Counter } from '../Component'

// テストケース: + と - ボタンで値が増減する
test('increments and decrements count', () => {
  render(
    <Provider>
      <Counter />
    </Provider>
  )
  fireEvent.click(screen.getByText('+'))
  expect(screen.getByText('1')).toBeInTheDocument()
  fireEvent.click(screen.getByText('-'))
  expect(screen.getByText('0')).toBeInTheDocument()
})

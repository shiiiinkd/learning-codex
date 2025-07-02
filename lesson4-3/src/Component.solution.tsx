// 難易度: 8/10
// 学習目標: useReducer と Context を用いたグローバルステート管理
import React, { createContext, useReducer, useContext } from 'react'
// useReducer でグローバルカウントを管理する完成形

const CountContext = createContext<{count: number; dispatch: React.Dispatch<Action>} | undefined>(undefined)

type Action = { type: 'inc' } | { type: 'dec' }

const reducer = (state: number, action: Action) => {
  switch (action.type) {
    case 'inc':
      return state + 1
    case 'dec':
      return state - 1
    default:
      return state
  }
}

export const Provider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, 0)
  return (
    <CountContext.Provider value={{ count, dispatch }}>
      {children}
    </CountContext.Provider>
  )
}

export const Counter: React.FC = () => {
  const context = useContext(CountContext)
  if (!context) throw new Error('use within Provider')
  const { count, dispatch } = context
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: 'inc' })}>+</button>
      <button onClick={() => dispatch({ type: 'dec' })}>-</button>
    </div>
  )
}

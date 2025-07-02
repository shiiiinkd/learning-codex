// 難易度: 8/10
// 学習目標: useReducer と Context を用いたグローバルステート管理
import React, { createContext, useReducer, useContext } from 'react'
// Step0: ソリューション参照用インポート
import { Provider as SolutionProvider, Counter as SolutionCounter } from './Component.solution'

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
  // Step 1: Provider で count と dispatch を共有
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
  // Step 2: + ボタンで dispatch({type:'inc'})
  // Step 3: - ボタンで dispatch({type:'dec'})
  /* TODO: 実装 */
  return (
    <div>
      <span>{count}</span>
    </div>
  )
}

// 完成イメージ: 2 つのボタンでカウントが増減する

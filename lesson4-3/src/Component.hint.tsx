import React, { createContext, useReducer, useContext } from 'react'

const Ctx = createContext({ count: 0, dispatch: (a: any) => {} })

const reducer = (s: number, a: { type: 'inc' | 'dec' }) => a.type === 'inc' ? s + 1 : s - 1

export const HintProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, 0)
  return <Ctx.Provider value={{ count, dispatch }}>{children}</Ctx.Provider>
}

export const HintCounter = () => {
  const { count, dispatch } = useContext(Ctx)
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: 'inc' })}>+</button>
      <button onClick={() => dispatch({ type: 'dec' })}>-</button>
    </div>
  )
}

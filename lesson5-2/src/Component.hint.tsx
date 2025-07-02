import React, { createContext, useReducer, useEffect, useContext } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const Ctx = createContext({ state: { items: [] as string[] }, dispatch: (a: any) => {} })
const reducer = (s: { items: string[] }, a: { type: 'add'; payload: string }) => ({ items: [...s.items, a.payload] })

export const HintProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { items: [] })
  useEffect(() => { localStorage.setItem('items', JSON.stringify(state.items)) }, [state])
  return <Ctx.Provider value={{ state, dispatch }}>{children}</Ctx.Provider>
}

export const HintHome = () => {
  const { state, dispatch } = useContext(Ctx)
  return (
    <div>
      <button onClick={() => dispatch({ type: 'add', payload: 'item' })}>Add</button>
      <ul>{state.items.map(i => <li key={i}>{i}</li>)}</ul>
    </div>
  )
}

export const HintApp = () => (
  <HintProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HintHome />} />
      </Routes>
    </BrowserRouter>
  </HintProvider>
)

// 難易度: 10/10
// 学習目標: Context, Reducer, ルーティングを統合したアプリを構築する
import React, { createContext, useReducer, useContext, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// Step0: ソリューション参照用インポート
import { App as Solution } from './Component.solution'

type Action = { type: 'add'; payload: string }
type State = { items: string[] }

const AppContext = createContext<{state: State; dispatch: React.Dispatch<Action>} | undefined>(undefined)

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'add':
      return { items: [...state.items, action.payload] }
    default:
      return state
  }
}

const Provider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { items: [] })
  useEffect(() => {
    // Step 1: state.items を JSON で保存
    /* TODO: 実装 */
  }, [state])
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

const Home: React.FC = () => {
  const context = useContext(AppContext)
  if (!context) throw new Error('use within Provider')
  const { state, dispatch } = context
  const add = () => dispatch({ type: 'add', payload: 'item' })
  return (
    <div>
      <button onClick={add}>Add</button>
      <ul>{state.items.map((i) => (<li key={i}>{i}</li>))}</ul>
    </div>
  )
}

export const App: React.FC = () => (
  <Provider>
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)

// 完成イメージ: 追加ボタンでリストが増え、状態は localStorage に保存される

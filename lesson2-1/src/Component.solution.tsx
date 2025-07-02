// \u96e3\u6613\u5ea6: 3/10
// 学習目標: useState で状態を更新する
import React, { useState } from 'react'

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0) // count state を保持
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}

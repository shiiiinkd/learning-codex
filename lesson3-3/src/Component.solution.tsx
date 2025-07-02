// 難易度: 8/10
// 学習目標: useEffect と setInterval を用いたタイマー制御を実装する
import React, { useEffect, useState } from 'react'
// setInterval を利用したタイマーの完成形

export const Timer: React.FC = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCount((c) => c + 1), 1000)
    return () => clearInterval(id)
  }, [])

  return <span>{count}</span>
}

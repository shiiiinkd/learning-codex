// \u96e3\u6613\u5ea6: 4/10
// 学習目標: 複数ステートの管理方法を学ぶ
import React, { useState } from 'react'

export const ControlledInput: React.FC = () => {
  const [value, setValue] = useState('') // 入力値を state で管理
  return (
    <input value={value} onChange={(e) => setValue(e.target.value)} />
  )
}

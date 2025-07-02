import React, { useState } from 'react'

// 入力値を state に入れ、その値を表示するだけのサンプル
export const Hint = () => {
  const [text, setText] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  return (
    <div>
      <input value={text} onChange={handleChange} />
      <p>{text}</p>
    </div>
  )
}

import React, { useState } from 'react'

// 文字列長に応じてエラーメッセージを切り替える例
export const Hint = () => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setValue(val)
    setError(val.length < 3 ? '3文字以上入力してください' : '')
  }
  return (
    <div>
      <input value={value} onChange={handleChange} />
      {error && <span>{error}</span>}
    </div>
  )
}

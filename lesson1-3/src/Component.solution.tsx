// 難易度: 3/10
// 学習目標: 型付きフォーム入力と簡単なバリデーションを実装する
import React, { useState } from 'react'
// 入力値とエラーメッセージを state 管理する完成形

export const ValidatedInput: React.FC = () => {
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
      {error && <span role="alert">{error}</span>}
    </div>
  )
}

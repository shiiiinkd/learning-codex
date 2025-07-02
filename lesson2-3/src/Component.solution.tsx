// 難易度: 5/10
// 学習目標: useState を使ったフォームの双方向バインディング
import React, { useState } from 'react'
// 入力と表示が双方向に結び付いた完成例

export const TwoWayForm: React.FC = () => {
  const [text, setText] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <div>
      <input value={text} onChange={handleChange} />
      <p data-testid="preview">{text}</p>
    </div>
  )
}

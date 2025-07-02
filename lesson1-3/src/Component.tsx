// 難易度: 3/10
// 学習目標: 型付きフォーム入力と簡単なバリデーションを実装する
import React, { useState } from 'react'
// Step0: ソリューションを確認したい場合はインポート
import { ValidatedInput as Solution } from './Component.solution'

export const ValidatedInput: React.FC = () => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Step 1: 入力値を state に保存
    // Step 2: 3文字未満ならエラーを設定
    /* TODO: 上記の処理を実装 */
  }

  return (
    <div>
      <input value={value} onChange={handleChange} />
      {error && <span role="alert">{error}</span>}
    </div>
  )
}

// 完成イメージ: 入力が3文字未満のときエラーメッセージを表示する

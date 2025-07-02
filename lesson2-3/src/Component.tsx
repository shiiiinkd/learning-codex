// 難易度: 5/10
// 学習目標: useState を使ったフォームの双方向バインディング
import React, { useState } from 'react'
// Step0: ソリューション参照用インポート
import { TwoWayForm as Solution } from './Component.solution'

export const TwoWayForm: React.FC = () => {
  const [text, setText] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Step 1: 入力値から text を取得
    // Step 2: state を更新
    /* TODO: 上記の処理を実装 */
  }

  return (
    <div>
      <input value={text} onChange={handleChange} />
      <p data-testid="preview">{text}</p>
    </div>
  )
}

// 完成イメージ: 入力内容が下部プレビューに即時反映される

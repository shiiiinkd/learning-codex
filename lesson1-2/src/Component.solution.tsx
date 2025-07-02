// \u96e3\u6613\u5ea6: 2/10
// 学習目標: 条件レンダリングとイベントハンドラを実装する
import React from 'react'

type Props = {
  onClick: () => void
}

export const EventButton: React.FC<Props> = ({ onClick }) => {
  // ボタン押下時にイベントを抑制してから親ハンドラを実行
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onClick()
  }
  return <button onClick={handleClick}>Click</button>
}

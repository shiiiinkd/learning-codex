// \u96e3\u6613\u5ea6: 1/10
// 学習目標: 関数コンポーネントと Props の基本を理解する
import React from 'react'

type Props = {
  message: string
}

export const Hello: React.FC<Props> = ({ message }) => {
  // 最終的に表示される要素は以下の通り
  // <div>{message}</div>
  return <div>{message}</div>
}

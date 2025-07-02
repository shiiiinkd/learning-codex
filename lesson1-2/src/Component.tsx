// \u96e3\u6613\u5ea6: 2/10
// 学習目標: 条件レンダリングとイベントハンドラを実装する
import React from 'react'
// Step0: ソリューション参照用インポート
import { EventButton as Solution } from './Component.solution'

type Props = {
  onClick: () => void
}

export const EventButton: React.FC<Props> = ({ onClick }) => {
  // Step 1: クリック時に onClick を呼び出す関数を定義
  const handleClick /* TODO: 実装 */
  return <button onClick={handleClick}>Click</button>
}

// 完成イメージ: ボタンを押すと親から渡されたハンドラが実行される

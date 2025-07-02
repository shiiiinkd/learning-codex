// 難易度: 8/10
// 学習目標: useEffect と setInterval を用いたタイマー制御を実装する
import React, { useEffect, useState } from 'react'
// Step0: ソリューション参照用インポート
import { Timer as Solution } from './Component.solution'

export const Timer: React.FC = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Step 1: setInterval で 1 秒ごとに count を更新
    // Step 2: アンマウント時にタイマーを解除
    /* TODO: 上記の処理を実装 */
  }, [])

  return <span>{count}</span>
}

// 完成イメージ: 画面表示が毎秒カウントアップする

// \u96e3\u6613\u5ea6: 5/10
// 学習目標: マウント時のフェッチ処理を実装する
import React, { useState, useEffect } from 'react'
// ボタン押下で count が増え、title が更新される完成例

export const TitleEffect: React.FC = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `count: ${count}`
  }, [count])
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}

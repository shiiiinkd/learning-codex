// \u96e3\u6613\u5ea6: 6/10
// 学習目標: 依存配列とクリーンアップを理解する
import React, { useEffect, useState } from 'react'
// API フェッチとローディング表示の完成例

export const DataLoader: React.FC = () => {
  const [data, setData] = useState<null | { title: string }>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((d) => {
        setData(d)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Loading...</div>
  return <div>{data?.title}</div>
}

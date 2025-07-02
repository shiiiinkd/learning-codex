import React, { useState, useEffect } from 'react'

export const Hint = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<any>(null)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(d => { setData(d); setLoading(false) })
  }, [])
  if (loading) return <div>Loading...</div>
  return <div>{data.title}</div>
}

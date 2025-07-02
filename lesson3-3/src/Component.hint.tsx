import React, { useState, useEffect } from 'react'

export const Hint = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setCount(c => c + 1), 1000)
    return () => clearInterval(id)
  }, [])
  return <span>{count}</span>
}

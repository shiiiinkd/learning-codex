import React, { useState, useEffect } from 'react'

export const Hint = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `count: ${count}`
  }, [count])
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}

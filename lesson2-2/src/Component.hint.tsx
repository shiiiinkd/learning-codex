import React, { useState } from 'react'

export const Hint = () => {
  const [value, setValue] = useState('')
  return <input value={value} onChange={(e) => setValue(e.target.value)} />
}

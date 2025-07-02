import React from 'react'

export const Hint = ({ onClick }: { onClick: () => void }) => {
  // onClick を呼ぶ関数を定義し button にセットする例
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onClick()
  }
  return <button onClick={handleClick}>Click</button>
}

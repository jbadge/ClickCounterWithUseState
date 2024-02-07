import React, { useState } from 'react'

export function Counter() {
  const [counter, setCounter] = useState(0)

  function handleClickCounter(event: React.MouseEvent) {
    event.preventDefault()

    setCounter(counter + 1)
  }

  return (
    <div>
      <p>The count is {counter}</p>
      <button onClick={handleClickCounter}>Increment</button>
    </div>
  )
}

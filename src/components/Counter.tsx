import React, { useState } from 'react'

export function Counter() {
  const valueAndSetMethod = useState(0)

  const counter = valueAndSetMethod[0]
  const setCounter = valueAndSetMethod[1]

  return (
    <div>
      <p>The count is {counter}</p>
      <button>Increment</button>
    </div>
  )
}

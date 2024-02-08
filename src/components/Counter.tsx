import React, { useState } from 'react'

export function Counter() {
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('')

  // function handleClickCounter(event: React.MouseEvent) {
  //   event.preventDefault()
  //   setCounter(counter + 1)
  // }

  // function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
  //   setName(event.target.value)
  // }

  return (
    <div>
      <p>
        Hi, {name}! The count is {counter}
      </p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <p>
        <input value={name} onChange={(event) => setName(event.target.value)} />
      </p>
    </div>
  )
}

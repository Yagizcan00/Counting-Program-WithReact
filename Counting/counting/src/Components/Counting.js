import { useState, useEffect } from 'react'

function Counting() {
  let [number, setNumber] = useState(JSON.parse(localStorage.getItem("value" || 0)))

  useEffect(() => {
    localStorage.setItem("value", JSON.stringify(number))
  }, [number])

  return (
    <div>
      <h1>Counting</h1>
      <h2>{number}</h2>
      <button onClick={() => setNumber(number += 1)}>Increase</button>
      <button onClick={() => setNumber(number -= 1)}>Decrease</button>
    </div>
  )
}

export default Counting

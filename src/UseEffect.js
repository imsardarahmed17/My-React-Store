import React, {useState, useEffect} from 'react'

function UseEffect() {
    const [count, setCount] = useState(null)
    const [value, setValue] = useState(0)
useEffect(() => {
  alert ("useEffect check")
}, [count])

  return (
    <div>
        <h2>The count is: {count}</h2>
        <button onClick={()=> setCount(count + 1)}>Update count</button>

        <h2>The value is: {value}</h2>
        <button onClick={() => setValue(value + 1)}>Update value</button>
    </div>
  )
}

export default UseEffect
import React, {useState} from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [isOn, setIsOn] = useState(false)

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
  }

  const toggleLight = () => {
    setIsOn(prevIsOn => !prevIsOn)
  }

  return (
    <>
    <h2>Counter</h2>
    <button onClick={incrementCount}>
    I was clicked {count} times
    </button>
      
    <h2>Toggle Light</h2>
    <div
      style={{
        height: '50px',
        width: '50px',
        background: isOn ? 'yellow' : 'grey'
      }}
      onClick={toggleLight}
    ></div>
    </>
  )
}

export default App;
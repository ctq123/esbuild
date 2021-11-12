import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const handleCount = () => {
    setCount(count + 1)
  }
  return (
    <div>
      当前：{count}
      <div onClick={handleCount}>点我++</div>
    </div>
  )
}

export default App
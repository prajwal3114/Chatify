import React from 'react'
import Left from './home/leftpart/Left.jsx'
import Right from './home/rightpart/right.jsx'
function App() {
  return (
    <div className="App" style={{display:"flex"}}>
      <Left/>
      <Right/>
    </div>
  )
}

export default App
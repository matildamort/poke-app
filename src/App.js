import React from 'react'

let number = 5
const changeValue = () => {
  number = 8
}

const App = () => {
  const number =5 
  return (
    <div >
          <p> The value of number is :{number} </p>
          <button onClick={changeValue}>Change value to 8</button>
    </div>
  )
}

export default App

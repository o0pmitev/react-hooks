import React from 'react'

const Button = (props) => {
  // const {calculateWordCount} = props
  const {startTimer, isTimeRunning} = props
  return (
      
        // <button onClick={calculateWordCount}>Start</button>
        <button disabled={isTimeRunning} onClick={startTimer}>Start</button>

  )
}

export default Button
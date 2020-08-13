import React from 'react'

const Button = (props) => {
  const {calculateWordCount} = props
  return (
      
        <button onClick={calculateWordCount}>Start</button>
      
  )
}

export default Button
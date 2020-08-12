import React, { useState } from 'react'
import Timer from './Timer'
import StartButton from './StartButton'
import WordCount from './WordCount'

const Game = () => {
  let [text, setText] = useState('')
  return (
    <div className="game-container">
      <h2 className="game-title">How fast can you write it</h2>
      <textarea />
      <Timer />
      <StartButton />     
      <WordCount />
    </div>
  )
}

export default Game
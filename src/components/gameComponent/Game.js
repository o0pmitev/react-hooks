import React, { useState } from 'react'
import Timer from './Timer'
import StartButton from './StartButton'
import WordCount from './WordCount'

const Game = () => {
  let [text, setText] = useState('')
  let [isTimeRunning, setTimeRunning] = useState(false)
  
  const handleChange = (e) => {
    // updates the state
    const {value} = e.target
    setText(value)
  }
  
const calculateWordCount = (text) => {
  //counting how many words there is a text area 
  //and removes any whitespace from the beginning and end of the sentence
  //https://gomakethings.com/how-to-remove-white-space-from-the-beginning-or-end-of-a-string-with-vanilla-js/
  let words = text.trimStart().trimEnd().split(" ")
  let filteredWords = words.filter(words => words !== "").length
  return filteredWords
}
const startTimer = () => {
  // Start the timer
  setTimeRunning(isTimeRunning = true)
}
  return (
    <div className="game-container">
      <h2 className="game-title">How fast can you type 🤔</h2>
      <textarea
       onChange={handleChange}
       value={text}
       />
      <Timer isTimeRunning={isTimeRunning}/>
      <StartButton calculateWordCount={() => console.log(calculateWordCount(text))}/>     
      <WordCount/>
    </div>
  )
}

export default Game
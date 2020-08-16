import React, { useState, useRef } from 'react'
import Timer from './Timer'
import StartButton from './StartButton'
import WordCount from './WordCount'

const Game = () => {
  const STARTING_TIME = 30
  const [text, setText] = useState('')
  const [isTimeRunning, setTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const [time, setTime] = useState(STARTING_TIME)
  const textBoxRef = useRef(null)

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
  setTimeRunning(true)
  setTime(STARTING_TIME)
  setText('')
  textBoxRef.current.disabled = false
  textBoxRef.current.focus()
}

const endTimer = () => {
  setTimeRunning(false)
  const numWords = calculateWordCount(text)
  setWordCount(numWords)
}

  return (
    <div className="game-container">
      <h2 className="game-title">How fast can you type 🤔</h2>

      <textarea
      ref={textBoxRef}
       onChange={handleChange}
       value={text}
       disabled={!isTimeRunning}
       />

      <Timer 
      setTime={setTime} 
      time={time} 
      endTimer={endTimer} 
      isTimeRunning={isTimeRunning}
      />

      {/* <StartButton calculateWordCount={() => console.log(calculateWordCount(text))}/>      */}
      <StartButton isTimeRunning={isTimeRunning} startTimer={startTimer}/>     
      <WordCount  wordCount={wordCount}/>
    </div>
  )
}

export default Game
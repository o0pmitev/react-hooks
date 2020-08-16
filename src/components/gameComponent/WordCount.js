import React from 'react'

const WordCount = (props) => {
  const {wordCount} = props 
  return(
  <h3>I am the count: {wordCount}</h3>
  )
}

export default WordCount
import React, { useEffect } from 'react'

const Timer = (props) => {
  const {isTimeRunning, endTimer, time, setTime} = props

  useEffect(()=>{
    if(isTimeRunning && time > 0) {
      setTimeout(()=> {
        setTime(time => time - 1)
      },1000)
    } else {
      endTimer()
    }
  },[time, isTimeRunning])

  return(
    <h3>I am the timer {time}</h3>
  )
}

export default Timer
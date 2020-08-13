import React, { useState, useEffect } from 'react'

const Timer = (props) => {
  const {isTimeRunning} = props
  let [time, setTime] = useState(5)
  useEffect(()=>{
    if(isTimeRunning && time > 0) {
      setTimeout(()=> {
        setTime(time => time - 1)
      },1000)
    }
  },[time])

  return(
    <h3>I am the timer {time}</h3>
  )
}

export default Timer
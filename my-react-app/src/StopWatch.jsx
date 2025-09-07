import React, { useState, useEffect } from 'react'

function Stopwatch () {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval = null
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1)
      }, 1000)
    }
    return () => clearInterval(interval) // Cleanup on unmount or pause
  }, [isRunning])

  const start = () => {
    setIsRunning(true)
  }

  const pause = () => {
    setIsRunning(false)
  }

  const reset = () => {
    setIsRunning(false)
    setSeconds(0)
  }

  const styles = {
    time: {
      fontSize: '30px',
      marginLeft: '100px'
    },

    heading: {
      marginLeft: '50px'
    }
  }

  return (
    <div>
      <h2 style={styles.heading}>Stopwatch</h2>
      <p style={styles.time}>{seconds} </p>
      <button onClick={start} disabled={isRunning}>
        Start
      </button>
      <button onClick={pause} disabled={!isRunning}>
        Pause
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Stopwatch

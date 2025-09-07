import React, { useState, useEffect } from 'react';

function Timer() {
  const [input, setInput] = useState('');
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (running && seconds > 0) {
      const interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (seconds === 0 && running) {
      setRunning(false);
      setDone(true);
    }
  }, [running, seconds]);

  const start = () => {
    const num = Number(input);
    if (num > 0) {
      setSeconds(num);
      setRunning(true);
      setDone(false);
      setInput('');
    }
  };

  const reset = () => {
    setSeconds(0);
    setRunning(false);
    setDone(false);
    setInput('');
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === '' || Number(value) >= 0) {
      setInput(value);
    }
  };

  const styles = {
    container: { marginLeft:'20px'},
    time: { fontSize: '30px',
        marginLeft:'70px'
     },
    
  };

  return (
    <div style={styles.container}>
      <h2 style={{marginLeft:'50px'}}>Timer</h2>
      <input
        type="number"
        value={input}
        onChange={handleInputChange}
        style={styles.input}
      />
      <p style={styles.time}>{seconds}s</p>
      {done && <p>Done!</p>}
      <button onClick={start} style={styles.button}>Start</button>
      <button onClick={reset} style={styles.button}>Reset</button>
    </div>
  );
}

export default Timer;
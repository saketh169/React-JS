import React, { useState, useEffect } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Format time as HH:MM:SS
  const formatTime = () => {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  // Styles object
  const styles = {
    container: {
      textAlign: 'center',
      marginLeft:'40px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      maxWidth: '300px',
    },
    heading: {
      fontSize: '24px',
      marginBottom: '10px',
      color: '#333'
    },
    time: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#007bff',
      marginBottom: '15px'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Digital Clock</h2>
      <p style={styles.time} aria-live="polite">
        {formatTime()}
      </p>
    </div>
  );
}

export default DigitalClock;
import React, { useState } from 'react'

function ColorPicker () {
  const [color, setColor] = useState('#FFFFF')

  function handleColorChange (event) {
    setColor(event.target.value)
  }

  const styles = {
    heading: {
      marginTop: '30px',
      marginLeft: '50px'
    },
    colorDisplay: {
      width: '80px',
      height: '80px',
      backgroundColor: color,
      marginLeft: '70px'
    }
  }

  return (
    <div >
      <h2 style={styles.heading}>ColorPicker</h2>
      <div style={styles.colorDisplay}></div>
      <p style={{marginLeft: '30px'}}>Selected Color: {color}</p>
      <input type='color' value={color} onChange={handleColorChange} style={{marginLeft: '80px'}} />
    </div>
  )
}

export default ColorPicker

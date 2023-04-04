import React, { useState } from 'react'
import Header from './components/header'
import colors from './style'

const App = () => {
  const [mode, setMode] = useState("light")
  const currentMode = colors[mode]

  function toggleMode(){
    setMode(mode === "light" ? "dark" : "light")
  }

  return (
    <section 
    id='section' 
    className = 
    {`flex flex-col items-center ${mode === "light" ? "light" : "dark"} ${currentMode.body}`}
    >
      <Header mode={mode} toggleMode={toggleMode} />
    </section>
  )
}

export default App

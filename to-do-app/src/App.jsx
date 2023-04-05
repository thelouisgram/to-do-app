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
    {`flex flex-col items-center px-6 file:md:px-16
    ${mode === "light" ? "light" : "dark"} ${currentMode.body}`}
    >
      <Header mode={mode} toggleMode={toggleMode} />
      <div className={`flex flex-row justify-between p-4 w-full items-center 
      ${currentMode.background} ss:w-[480px] rounded-[5px]`}>
        <div className={`rounded-full mr-4 h-[24px] p-2 w-[24px] 
        flex items-center check justify-center relative cursor-pointer ${currentMode.check}`
        }>
          <div className={`absolute w-[20px] h-[20px] z-[3] rounded-full ${currentMode.background}`} />
        </div>
        <input placeholder='Create a new todo...' className={`flex flex-1 text-[18px] items-center
        ${currentMode.text} ${currentMode.background} font-josefin`}/>
        
      </div>
    </section>
  )
}

export default App

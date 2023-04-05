import React, { useState } from 'react'
import Header from './components/header'
import colors from './style'
import InputComponent from './components/InputComponent'
import Check from './components/Check'
import { cross } from './assets'

const App = () => {
  const [mode, setMode] = useState("light")
  const currentMode = colors[mode]
  const [list, myList] = useState([
    {task: "Go to the Market", complete: true},
    {task: "Code ", complete: true},
    {task: "Eat", complete: false},
    {task: "Fight", complete: false},
  ])

  function toggleMode(){
    setMode(mode === "light" ? "dark" : "light")
  }

  const taskList = list.map((item, index) => {
    const isLastItem = index === list.length - 1;
    const borderClass = isLastItem ? "" : ` border-b-[1px] ${currentMode.border}`;

    return (
        <div key={index} className={`flex flex-row items-center justify-between px-6 py-4 w-full ss:w-[480px]
       ${borderClass} `}>
          <p className={`flex flex-1 ${currentMode.text} font-normal font-josefin text-[18px]`}>{item.task}</p>
          <img src={cross} className={ `w-[16px] h-[16px]`}/>
        </div>
    )
  });

  return (
    <section 
    id='section' 
    className = 
    {`flex flex-col items-center px-6 file:md:px-16
    ${mode === "light" ? "light" : "dark"} ${currentMode.body}`}
    >
      <Header mode={mode} toggleMode={toggleMode} />
      <InputComponent mode={mode}/>
      <div className={` rounded-[5px] w-full ss:w-[480px] task-list ${currentMode.background}`}>
        {taskList}
      </div>
      
    </section>
  )
}

export default App

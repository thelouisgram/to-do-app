import React, { useState } from 'react'
import Header from './components/header'
import colors from './style'
import InputComponent from './components/InputComponent'
import Check from './components/Check'
import Task from './components/Task'

const App = () => {
  const [mode, setMode] = useState("dark")
  const currentMode = colors[mode]

  
  const [list, myList] = useState([
    {task: "Go to the Market", complete: true},
    {task: "Code Frontend Master", complete: true},
    {task: "Eat Dinner", complete: false},
    {task: "Fight Thanos", complete: false},
  ])

  function toggleMode(){
    setMode(mode === "light" ? "dark" : "light")
  }

  const taskList = list.map((item, index) => {
    const isLastItem = index === list.length - 1;
    const borderClass = isLastItem ? "" : ` border-b-[1px] ${currentMode.border}`;

    return (
        <Task key={index} task={item.task} mode={mode} borderClass={borderClass} />
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

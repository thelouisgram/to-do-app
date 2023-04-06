import React from 'react'
import colors from '../style'
import { cross } from '../assets'
import { iconCheck } from '../assets'


const Task = ({mode, items}) => {
  const currentMode = colors[mode]

  const Todo =({checked, text}) => {
    
    return(
        <div className={`flex flex-row items-center justify-between px-6 py-4 w-full ss:w-[480px] `}>
              {checked ? completed : incomplete}
            <p className={`flex flex-1 ${currentMode.text} font-normal 
            font-josefin text-[14px] ss:text-[18px]`}>{text}</p>
            <img src={cross} className={ `w-[16px] h-[16px]`}/>
          </div>
    )
  }

  const incomplete = <div 
            className = {`rounded-full mr-4 h-[24px] p-[2px] w-[24px] 
            flex items-center check justify-center relative cursor-pointer ${currentMode.check}`
            }>
              <div className={`absolute w-[22px] h-[22px] z-[3] rounded-full ${currentMode.background}`} />
        </div>

  const completed = <div className = {`rounded-full mr-4 h-[24px] w-[24px] 
            flex items-center complete justify-center relative cursor-pointer ${currentMode.check}`
            }>
  <img src={iconCheck}/></div>

  const newList = items.map((item) => {
    return(
        <Todo key={item.id} checked={item.checked} text={item.text}/>
    )
  })

  return (
    <section className={` rounded-[5px] w-full ss:w-[480px] task-list ${currentMode.background}`}>
      {newList}
    </section>
  )
}

export default Task

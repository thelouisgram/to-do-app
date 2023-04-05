import React from 'react'
import colors from '../style'
import { cross } from '../assets'


const Task = ({task, mode, borderClass}) => {
  const currentMode = colors[mode]
  const incomplete = <div 
            className = {`rounded-full mr-4 h-[24px] p-[2px] w-[24px] 
            flex items-center check justify-center relative cursor-pointer ${currentMode.check}`
            }>
   <div className={`absolute w-[22px] h-[22px] z-[3] rounded-full ${currentMode.background}`} />
        </div>

  return (
    <div className={`flex flex-row items-center justify-between px-6 py-4 w-full ss:w-[480px]
       ${borderClass} `}>
            {incomplete}
          <p className={`flex flex-1 ${currentMode.text} font-normal font-josefin text-[14px] ss:text-[18px]`}>{task}</p>
          <img src={cross} className={ `w-[16px] h-[16px]`}/>
        </div>
  )
}

export default Task

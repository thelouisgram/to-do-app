import colors from '../style'
import Check from './Check'
import React from 'react'



const InputComponent = ({mode}) => {
  const currentMode = colors[mode]

  return (
    <div className={`flex flex-row justify-between mb-[20px] p-5 w-full items-center 
      ${currentMode.background} ss:w-[480px] rounded-[5px]`}>
        
        <Check mode={mode}/>
        <form className='flex flex-1 text-[18px] items-center'>
        <input placeholder='Create a new todo...' className={`flex flex-1 text-[14px] ss:text-[18px] items-center
        ${currentMode.text} ${currentMode.background} font-josefin`}/>
        </form>
        <div>
          <i className={`fa-solid fa-check text-[20px] cursor-pointer ${currentMode.mark}`}></i>
        </div>
        
      </div>
  )
}

export default InputComponent

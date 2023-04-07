import React from 'react'
import { cross } from '../assets';
import Check from './Check'

const Todo = ({ checked, text, borderClass, currentMode }) => {
  return (
      <div
          className={`flex flex-row items-center justify-between px-6 py-4 w-full ss:w-[480px] ${borderClass} `}
      >
          <Check checked={checked} currentMode={currentMode} />
          <p
            className={`flex flex-1 $ font-normal font-josefin text-[14px] ss:text-[18px] 
            ${checked ? `line-through ${currentMode.cancel}` : `${currentMode.text}`}`}
          >
              {text}
          </p>
          <img src={cross} className='w-[16px] h-[16px]' />
      </div>
  )
}

export default Todo;
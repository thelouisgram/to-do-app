import React, {useState} from 'react';
import { cross } from '../assets';
import Check from './Check';

const Todo = ({ checked, text, currentMode, item, handleDelete, handleComplete }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleHover = () => {
    setIsHovering(true);
  }

  const handleLeave = () => {
    setIsHovering(false);
  }
  return (
    // Individual Todo container
    <div
      onMouseEnter={handleHover} onMouseLeave={handleLeave}
      className={`flex flex-row h-[70px] items-center justify-between px-6 py-4 w-full ss:w-[520px] 
          border-b-[1px] ${currentMode.border} `}
    >
      <Check item={item} handleComplete={handleComplete} checked={checked} currentMode={currentMode} />
      <p
        className={`flex flex-1 $ font-normal font-josefin text-[15px] ss:text-[18px] 
            ${checked ? `line-through ${currentMode.cancel}` : `${currentMode.text}`}`}
      >
        {text}
      </p>
      <button onClick={handleDelete} className={`w-[16px] h-[16px] outline-none ${isHovering ? 'flex' : 'hidden'} `}>
        <img src={cross} className="w-[100%] h-[100%] cursor-pointer" />
      </button>
    </div>
  );
};

export default Todo;

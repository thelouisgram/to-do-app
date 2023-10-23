import React, {useState} from 'react';
import { cross } from '../assets';
import Check from './Check';
import {motion, AnimatePresence, easeInOut} from 'framer-motion'
import { nanoid } from 'nanoid';

const Todo = ({item, checked, text, currentMode, handleDelete, handleComplete }) => {

 
  return (
    // Individual Todo container
    <AnimatePresence mode='wait'>
      <motion.div
      key={nanoid}
      initial={{opacity: 0, x:"50%"}}
      animate={{opacity:1, x:0}}
      transition={{ease:easeInOut, duration:0.5,}}
      >
    <div
      className={`flex flex-row h-[70px] items-center justify-between px-6 py-4 w-full ss:w-[520px] 
          border-b-[1px] ${currentMode.border} `}
    >
      <Check item={item} handleComplete={handleComplete} checked={checked} currentMode={currentMode} />
      <p
        className={`flex flex-1 $ font-normal font-josefin text-[15px] ss:text-[18px] overflow-hidden
            ${checked ? `line-through ${currentMode.cancel}` : `${currentMode.text}`}`}
      >
        {text}
      </p>
      <button onClick={handleDelete} className={`w-[16px] h-[16px] outline-none `}>
        <img src={cross} className="w-[100%] h-[100%] cursor-pointer" />
      </button>
    </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Todo;

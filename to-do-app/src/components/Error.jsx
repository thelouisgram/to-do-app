import React from 'react';
import { cross } from '../assets';

const Error = ({ currentMode, errorMessage, setErrorMessage }) => {
	return (
        <div className={`w-[250px] h-auto px-6 py-4 error rounded-[5px] font-josefin 
        text-[18px] ${currentMode.background}  ${currentMode.text}`}>
            <div onClick={(prev) => setErrorMessage(!prev)}
            className='flex justify-end cursor-pointer'><img src={cross}  className='h-[16px] w-[16px] '/></div>
			<p className={`flex items-center justify-center `}>Please enter a task!</p>
		</div>
	);
};

export default Error;

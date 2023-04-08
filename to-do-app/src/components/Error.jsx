import React from 'react';
import { cross } from '../assets';

const Error = ({ currentMode, setErrorMessage }) => {
	return (
        // Error Container
        <div className={`w-[250px] h-auto px-4 py-4 error rounded-[5px] font-josefin 
        text-[18px] ${currentMode.background}  ${currentMode.text}`}>
            {/* Cancel Error Notification */}
            <div onClick={(prev) => setErrorMessage(!prev)}
            className='flex justify-end cursor-pointer'><img src={cross}  className='h-[12px] w-[12px] '/></div>
            {/* Error Notification Content */}
			<p className={`flex items-center justify-center `}>Please enter a task!</p>
		</div>
	);
};

export default Error;

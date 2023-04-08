import React, { useState } from 'react';
import { iconCheck } from '../assets';

const Check = ({ checked, currentMode, handleComplete }) => {
	// CheckBox Design
	const incomplete = (
		<div
			className={`rounded-full mr-4 h-[24px] p-[2px] w-[24px] 
            flex items-center check justify-center relative cursor-pointer ${currentMode.check}`}
		>
			<div className={`absolute w-[22px] h-[22px] z-[3] rounded-full ${currentMode.background}`} />
		</div>
	);

	const completed = (
		<div
			className={`rounded-full mr-4 h-[24px] w-[24px] 
            flex items-center complete justify-center relative cursor-pointer ${currentMode.check}`}
		>
			<img src={iconCheck} />
		</div>
	);

	return (
		<div onClick={handleComplete}>
			{checked ? completed : incomplete}
		</div>
	)
};

export default Check;

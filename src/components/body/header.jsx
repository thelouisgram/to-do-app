import React from 'react';
import { moon, sun } from '../../assets';

const Header = ({ mode, toggleMode }) => {
	return (
		// Header Container
		<div className={`flex flex-row justify-between w-full items-center m-[30px] md:m-[50px] ss:w-[520px] `}>
			<h1 className={`font-josefin font-[700] text-[30px] tracking-[16px] text-white`}>TODO</h1>
			<div onClick={toggleMode} className="cursor-pointer">
				<img className="w-[20px] h-[20px]" src={mode === 'light' ? moon : sun} alt="mode" />
			</div>
		</div>
	);
};

export default Header;

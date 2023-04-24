import React from 'react';

const Tab = ({setCurrentTab, index, mode, currentMode, currentTab, tab}) => {
	return (
		<div>
			<p
				onClick={() => setCurrentTab(index)}
				className={`cursor-pointer  ${currentTab === index ? currentMode.active : currentMode.cancel}
							${mode === 'light' ? 'b-t-l' : 'b-t-d'} mr-2`}
			>
				{tab}
			</p>
		</div>
	);
};

export default Tab;

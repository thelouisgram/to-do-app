import React from 'react';

const Error = ({ currentMode, errorMessage }) => {
	return (
        // Error Container
        <div className={`w-full h-auto py-[2px] fixed top-0 left-0 error  font-josefin 
        text-[16px] ${currentMode.background}  ${currentMode.text}`}>
            {/* Error Notification Content */}
			<p className={`flex items-center justify-center `}>{errorMessage}</p>
		</div>
	);
};

export default Error;

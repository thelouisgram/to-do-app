import React from 'react';
import { motion, AnimatePresence, easeInOut } from 'framer-motion';

const Notification = ({ notification, currentMode, notificationMessage }) => {
	return (
        <>
			{notification && 
					<div
						className={`w-full h-auto min-h-[32px] text-center justify-center flex 
                items-center px-4 py-1 fixed font-josefin text-[16px] top-0 left-0 
                ${currentMode.background} ${currentMode.text}`}
					>
						{/* Notification Content */}
						<p className={`flex items-center justify-center`}>{notificationMessage}</p>
					</div>}	
        </>
	)
};

export default Notification;

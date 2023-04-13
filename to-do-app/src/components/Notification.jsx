import React from 'react';

const Notification = ({ currentMode, notificationMessage }) => {
    return (
        // Notification Container
        <div className={`w-full h-auto py-[4px] px-4 fixed top-auto notification  font-josefin 
        text-[16px] ${currentMode.background}  ${currentMode.text}`}>
            {/*  Notification Content */}
            <p className={`flex items-center justify-center `}>{notificationMessage}</p>
        </div>
    );
};

export default Notification;

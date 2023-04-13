import React from 'react';

const Notification = ({ currentMode, notificationMessage }) => {
    return (
        // Notification Container
        <div className={`w-full h-[32px] text-center justify-center flex items-center px-4 fixed top-auto notification overflow-hidden font-josefin 
        text-[16px] ${currentMode.background}  ${currentMode.text}`}>
            {/*  Notification Content */}
            <p className={`flex items-center justify-center `}>{notificationMessage}</p>
        </div>
    );
};

export default Notification;

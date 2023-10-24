/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Form from '../body/Form';
import Todos from '../Todos';

const Main = ({mode, currentMode, items, setItems}) => {
    // Task form
    const [inputValue, setInputValue] = useState('');

    // Tabbed Content pagination
    const pagination = ["All", "Active", "Completed"];

    // State to track tabbed content
    const [currentTab, setCurrentTab] = useState(0);

    return (
        <div className='w-full ss:w-[520px]'>
            <Form
                currentMode={currentMode}
                items={items}
                setItems={setItems}
                inputValue={inputValue}
                setInputValue={setInputValue}
                setCurrentTab={setCurrentTab}
            />
            {/* Todos Container */}
            <Todos
                mode={mode}
                currentMode={currentMode}
                items={items}
                setItems={setItems}
                pagination={pagination}
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
            />
        </div>
    );
};

export default Main


import React from 'react';
import Todo from './Todo';

const ShowAll = ({ handleComplete, handleDelete, currentMode, allTodos }) => {
    const newList = allTodos.map((item) => {
        return (
            <Todo
                key={item.id}
                checked={item.checked}
                text={item.text}
                currentMode={currentMode}
                item={item}
                handleComplete={() => handleComplete(item.id)}
                handleDelete={() => handleDelete(item.id)}
            />
        );
    });

    return <div>{newList}</div>;
};

export default ShowAll;

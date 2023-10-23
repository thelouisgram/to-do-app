import React from 'react';
import Todo from '../Todo';

const AllTodos = ({ handleComplete, handleDelete, currentMode, items }) => {
    const newList = items.map((item) => {
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

export default AllTodos;

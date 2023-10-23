/* eslint-disable react/prop-types */
import React from 'react';
import Todo from '../shared/Todo';

const ActiveTodos = ({ handleComplete, handleDelete, currentMode, items, setItems, uncheckedTodos }) => {
    const newList = uncheckedTodos.map((item) => {
        return (
            <Todo
                key={item.id}
                checked={item.checked}
                text={item.text}
                currentMode={currentMode}
                items={items}
                setItems={setItems}
                item={item}
                handleComplete={() => handleComplete(item.id)}
                handleDelete={() => handleDelete(item.id)}
            />
        );
    });

    return <div>{newList}</div>;
};

export default ActiveTodos;

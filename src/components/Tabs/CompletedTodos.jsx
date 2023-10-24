/* eslint-disable react/prop-types */
import React from 'react';
import Todo from '../shared/Todo';

const CompletedTodos = ({ handleComplete, handleDelete, currentMode, items, setItems, checkedTodos }) => {
    const newList = checkedTodos.map((item) => {
        return (
            <Todo
                key={item.id}
                items={items}
                checked={item.checked}
                text={item.text}
                currentMode={currentMode}
                item={item}
                setItems={setItems}
                handleComplete={() => handleComplete(item.id)}
                handleDelete={() => handleDelete(item.id)}
            />
        );
    });

    return <div>{newList}</div>;
};

export default CompletedTodos;

import React from 'react';
import Todo from './Todo';

const Task = ({ currentMode, items }) => {
  const newList = items.map((item, index) => {
		return (
			<Todo
				key={item.id}
				checked={item.checked}
				text={item.text}
				borderClass={index === items.length - 1 ? '' : `border-b-[1px] ${currentMode.border}`}
				currentMode={currentMode}
			/>
		);
	});

	return (
		<section className={`rounded-[5px] w-full ss:w-[480px] mb-[30px] task-list ${currentMode.background}`}>{newList}</section>
	);
};

export default Task;

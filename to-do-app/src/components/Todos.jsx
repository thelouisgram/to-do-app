import React from 'react';
import TodoList from './TodoList';

const Todos = ({
	currentMode,
	items,
	setItems,
	mode,
	showAll,
	setShowAll,
	showActive,
	setShowActive,
	showCompleted,
	setShowCompleted,
	allTodos,
	setAllTodos,
	checkedTodos,
	setCheckedTodos,
	uncheckedTodos,
	setUncheckedTodos
}) => {
	const handleComplete = (id) => {
		setItems(
			items.map((todo) => {
				if (todo.id === id) {
					return { ...todo, checked: !todo.checked };
				}
				return todo;
			})
		);
	};

	const handleClearCompleted = () => {
		const incompleteList = items.filter((todo) => todo.checked === false);
		setItems(incompleteList);
		setShowAll(true);
		setShowActive(false);
		setShowCompleted(false);
	};

	const handleDelete = (id) => {
		setItems(items.filter((todo) => todo.id !== id));
	};

	return (
		<section className={`rounded-[5px] w-full ss:w-[520px] mb-[20px] `}>
			<TodoList
				currentMode={currentMode}
				items={items}
				handleComplete={handleComplete}
				handleDelete={handleDelete}
				handleClearCompleted={handleClearCompleted}
				mode={mode}
				showAll={showAll}
				setShowAll={setShowAll}
				showActive={showActive}
				setShowActive={setShowActive}
				showCompleted={showCompleted}
				setShowCompleted={setShowCompleted}
				allTodos={allTodos}
				setAllTodos={setAllTodos}
				checkedTodos={checkedTodos}
				setCheckedTodos={setCheckedTodos}
				uncheckedTodos={uncheckedTodos}
				setUncheckedTodos={setUncheckedTodos}
			/>
		</section>
	);
};

export default Todos;

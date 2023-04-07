import React from 'react';
import Todo from './Todo';
import TodoList from './TodoList';

const Todos = ({ currentMode, items, setItems, mode }) => {

	const handleComplete = (id) =>{
		setItems(
			items.map((todo) =>{
				if (todo.id === id){
					return {...todo, checked: !todo.checked}
				}
				return todo
			})
		)
	}

	const handleClearCompleted = () => {
			const incompleteList = items.filter((todo) => todo.checked === false)
		setItems(incompleteList)
	}


	const handleDelete = (id) =>{
		setItems(
			items.filter((todo) => todo.id !== id)
		)
	}

	 const newList = items.map((item, index) => {
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

	return (
		<section className={`rounded-[5px] w-full ss:w-[520px] mb-[30px] task-list ${currentMode.background}`}>
			<TodoList 
			newList={newList} 
			currentMode={currentMode} 
			items={items} 
			handleClearCompleted={handleClearCompleted }
			mode={mode}/>
		</section>
	);
};

export default Todos;

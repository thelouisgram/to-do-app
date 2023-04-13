import React, { useState } from 'react';
import ShowAll from './ShowAll';
import ShowActive from './ShowActive'
import ShowCompleted from './ShowCompleted'


const TodoSection = ({ currentMode, items, handleClearCompleted, mode,
	handleDelete, handleComplete, showAll, setShowAll, showActive, setShowActive,
	showCompleted, setShowCompleted, allTodos, setAllTodos, checkedTodos, setCheckedTodos,
	uncheckedTodos, setUncheckedTodos }) => {

	// Tabbed Content
	const handleShowAll = () => {
		setShowAll(true);
		setShowActive(false);
		setShowCompleted(false);
	};

	const handleShowChecked = () => {
		setShowAll(false);
		setShowCompleted(true);
		setShowActive(false);
	};

	const handleShowUnchecked = () => {
		setShowAll(false);
		setShowCompleted(false);
		setShowActive(true);
	};

	// Update Tabbed Content on change in items array
	React.useEffect(() => {
		setAllTodos(items);
	}, [items]);

	React.useEffect(() => {
		const checkedTodos = items.filter((item) => item.checked);
		setCheckedTodos(checkedTodos);
	}, [items]);

	React.useEffect(() => {
		const uncheckedTodos = items.filter((item) => !item.checked);
		setUncheckedTodos(uncheckedTodos);
	}, [items]);


	return (
		<div>
			{/* TodoSection container */}
			<div className={`rounded-[5px] w-full ss:w-[520px] mb-[20px] task-list ${currentMode.background}`}>
				{showAll &&
					<ShowAll allTodos={allTodos}
						handleComplete={handleComplete} handleDelete={handleDelete} currentMode={currentMode} />}
				{showActive &&
					<ShowActive uncheckedTodos={uncheckedTodos}
						handleComplete={handleComplete} handleDelete={handleDelete} currentMode={currentMode} />}
				{showCompleted &&
					<ShowCompleted checkedTodos={checkedTodos}
						handleComplete={handleComplete} handleDelete={handleDelete} currentMode={currentMode} />}
				<div
					className={`px-6 py-4 
					font-josefin text-[15px]  justify-between items-center h-[50px] font-[500] flex`}
				>
					<div className={`${currentMode.cancel} `}>
						{showAll && <p>{allTodos.length} item{allTodos.length > 1 ? 's' : ''} Left</p>}
						{showActive && <p> {uncheckedTodos.length} item{uncheckedTodos.length > 1 ? 's' : ''} Left</p>}
						{showCompleted && <p>{checkedTodos.length} item{checkedTodos.length > 1 ? 's' : ''} Completed</p>}
					</div>
					{/* Tabbed Content Button */}
					<ul className={`hidden ss:flex  `}>
						<li
							onClick={handleShowAll}
							className=
							{`cursor-pointer ${showAll ? currentMode.active : currentMode.cancel}
							${mode === 'light' ? 'b-t-l' : 'b-t-d'} mr-2`}>All</li>
						<li
							onClick={handleShowUnchecked}
							className=
							{`cursor-pointer ${showActive ? currentMode.active : currentMode.cancel}
							${mode === 'light' ? 'b-t-l' : 'b-t-d'} mr-2`}>Active</li>
						<li
							onClick={handleShowChecked}
							className=
							{`cursor-pointer ${showCompleted ? currentMode.active : currentMode.cancel}
							${mode === 'light' ? 'b-t-l' : 'b-t-d'}`}>Completed</li>
					</ul>
					<p
						onClick={handleClearCompleted}
						className={`${currentMode.cancel} 
						cursor-pointer ${mode === 'light' ? 'b-t-l' : 'b-t-d'} `}
					>
						Clear Completed
					</p>
				</div>
			</div>
			{/* Tabbed content buttons for mobile devices */}
			<div className={`ss:hidden flex rounded-[5px] w-full ss:w-[520px] mb-[30px] task-list ${currentMode.background}
			px-6 py-4 font-josefin text-[15px] justify-center items-center h-[50px] font-[500]`}>

				<ul className={`flex justify-center `}>
					<li
						onClick={handleShowAll}
						className=
						{`cursor-pointer ${showAll ? currentMode.active : currentMode.cancel}
							${mode === 'light' ? 'b-t-l' : 'b-t-d'} mr-2`}>All</li>
					<li
						onClick={handleShowUnchecked}
						className=
						{`cursor-pointer ${showActive ? currentMode.active : currentMode.cancel}
							${mode === 'light' ? 'b-t-l' : 'b-t-d'} mr-2`}>Active</li>
					<li
						onClick={handleShowChecked}
						className=
						{`cursor-pointer ${showCompleted ? currentMode.active : currentMode.cancel}
							${mode === 'light' ? 'b-t-l' : 'b-t-d'}`}>Completed</li>
				</ul>
			</div>
		</div>
	);
};

export default TodoSection;

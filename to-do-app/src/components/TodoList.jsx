import React, { useState } from 'react';

const TodoList = ({ currentMode, items, handleClearCompleted, mode }) => {
	const [ showAll, setShowAll ] = useState(true);
	const [ showActive, setShowActive ] = useState(false);
	const [ showCompleted, setShowCompleted ] = useState(false);
	const [ AllTodos, setAllTodos ] = useState(items);
	const [ checkedTodos, setCheckedTodos ] = useState([]);
	const [ uncheckedTodos, setUncheckedTodos ] = useState([]);

	return (
		<div>
			{items.length !== 0 && (
				<div
					className={`px-6 py-4 
					font-josefin text-[14px]  justify-between items-center h-[50px] flex`}
				>
					<p className={`${currentMode.cancel}`}>{items.length} items Left</p>

					<p
						onClick={handleClearCompleted}
						className={`${currentMode.cancel} 
						cursor-pointer ${mode === 'light' ? 'b-t-l' : 'b-t-d'} `}
					>
						Clear Completed
					</p>
				</div>
			)}
		</div>
	);
};

export default TodoList;

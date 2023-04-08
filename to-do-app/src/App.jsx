import React, { useState, useEffect } from 'react';
import Header from './components/header';
import colors from './style';
import Todos from './components/Todos';
import Form from './components/Form';
import Error from './components/Error';

const App = () => {
	const [mode, setMode] = useState('dark');
	const currentMode = colors[mode];
	const [items, setItems] = useState([]);
	const [showAll, setShowAll] = useState(true);
	const [showActive, setShowActive] = useState(false);
	const [showCompleted, setShowCompleted] = useState(false);
	const [allTodos, setAllTodos] = useState(items);
	const [checkedTodos, setCheckedTodos] = useState([]);
	const [uncheckedTodos, setUncheckedTodos] = useState([]);
	const [inputValue, setInputValue] = useState('');
	const [errorMessage, setErrorMessage] = useState(false);

	useEffect(() => {
		const storedItems = JSON.parse(localStorage.getItem('items'));
		if (storedItems) {
			setItems(storedItems);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('items', JSON.stringify(items));
	}, [items]);
	function toggleMode() {
		setMode(mode === 'light' ? 'dark' : 'light');
	}

	return (
		<section
			id="section"
			className={`flex flex-col items-center px-6 file:md:px-16
      		${mode === 'light' ? 'light' : 'dark'} ${currentMode.body}`}
		>
			<Header mode={mode} toggleMode={toggleMode} />
			<Form
				currentMode={currentMode}
				items={items}
				setShowCompleted={setShowCompleted}
				setShowAll={setShowAll}
				setShowActive={setShowActive}
				setItems={setItems}
				inputValue={inputValue}
				setInputValue={setInputValue}
				setErrorMessage={setErrorMessage}
			/>
			<Todos
				mode={mode}
				currentMode={currentMode}
				items={items}
				setItems={setItems}
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
			{errorMessage && 
			<Error currentMode={currentMode} errorMessage={errorMessage} setErrorMessage={setErrorMessage} />}
		</section>
	);
};
export default App;

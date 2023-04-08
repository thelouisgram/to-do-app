import React, { useState, useEffect } from 'react';
import Header from './components/header';
import colors from './style';
import Todos from './components/Todos';
import Form from './components/Form';
import Error from './components/Error';

const App = () => {
	// Light & Dark Mode state
	const [mode, setMode] = useState('dark');
	const currentMode = colors[mode];
	// Todo Array
	const [items, setItems] = useState([]);
	// For Tabbed Content 
	const [showAll, setShowAll] = useState(true);
	const [showActive, setShowActive] = useState(false);
	const [showCompleted, setShowCompleted] = useState(false);
	const [allTodos, setAllTodos] = useState(items);
	const [checkedTodos, setCheckedTodos] = useState([]);
	const [uncheckedTodos, setUncheckedTodos] = useState([]);
	// Task form
	const [inputValue, setInputValue] = useState('');
	// Error Notification
	const [errorMessage, setErrorMessage] = useState(false);

	// Local Storage
	useEffect(() => {
		const storedItems = localStorage.getItem('items');
		const storedMode = localStorage.getItem('mode');
		if (storedItems) {
			setItems(JSON.parse(storedItems));
			setAllTodos(JSON.parse(storedItems));
		}
		if (storedMode) {
			setMode(storedMode);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('items', JSON.stringify(items));
		localStorage.setItem('mode', mode);
	}, [items, mode]);

	// Toggle Light and Dark Mode
	function toggleMode() {
		setMode(mode === 'light' ? 'dark' : 'light');
	}

	return (
		<section
			id="section"
			className={`flex flex-col items-center px-6 file:md:px-16
        ${mode === 'light' ? 'light' : 'dark'} ${currentMode.body}`}
		>
			{/* Header */}
			<Header mode={mode} toggleMode={toggleMode} />
			{/* Form Container */}
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
			{/* Todo Container */}
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
			{/* Error Container */}
			{errorMessage &&
				<Error currentMode={currentMode} errorMessage={errorMessage} setErrorMessage={setErrorMessage} />}
		</section>
	);
};

export default App;

import React, { useState, useEffect } from 'react';
import Header from './components/header';
import colors from './style';
import Todos from './components/Todos';
import Form from './components/Form';
import Notification from './components/Notification';

const App = () => {
	// Light & Dark Mode state
	const [ mode, setMode ] = useState('dark');
	const currentMode = colors[mode];
	
	// Todo Array
	const [ items, setItems ] = useState([]);

	// Task form
	const [ inputValue, setInputValue ] = useState('');

	// Notification
	const [ notification, setNotification ] = useState(false);

	// Notification Message
	const [ notificationMessage, setNotificationMessage ] = useState('');

	// Tabbed Content pagination
	const pagination = ["All", "Active", "Completed"];

	// State to track tabbed content
	const [ currentTab, setCurrentTab ] = useState(0);

	// Local Storage
	useEffect(() => {
		const storedItems = localStorage.getItem('items');
		const storedMode = localStorage.getItem('mode');
		if (storedItems) {
			setItems(JSON.parse(storedItems));
		}
		if (storedMode) {
			setMode(storedMode);
		}
	}, []);

	useEffect(
		() => {
			localStorage.setItem('items', JSON.stringify(items));
			localStorage.setItem('mode', mode);
		},
		[ items, mode ]
	);

	// Toggle Light and Dark Mode Function
	function toggleMode() {
		setMode(mode === 'light' ? 'dark' : 'light');
	}

	return (
		<section
			id="section"
			className={`flex flex-col  items-center h-[100%] px-6 
        	${mode} ${currentMode.body}`} 
		>
			{/* Header */}
			<Header mode={mode} toggleMode={toggleMode} />
			{/* Form Container */}
			<Form
				currentMode={currentMode}
				items={items}
				setItems={setItems}
				inputValue={inputValue}
				setInputValue={setInputValue}
				setNotification={setNotification}
				setNotificationMessage={setNotificationMessage}
				setCurrentTab={setCurrentTab}
			/>
			{/* Todos Container */}
			<Todos
				mode={mode}
				currentMode={currentMode}
				items={items}
				setItems={setItems}
				setNotification={setNotification}
				setNotificationMessage={setNotificationMessage}
				pagination={pagination}
				currentTab={currentTab}
				setCurrentTab={setCurrentTab}
			/>
			{/* Notification Container */}
			<Notification 
				currentMode={currentMode} 
				notificationMessage={notificationMessage}  
				notification={notification}/>
		</section>
	);
};

export default App;
